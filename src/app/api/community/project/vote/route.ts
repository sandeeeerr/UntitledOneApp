import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { redis } from '@/lib/redis'
import { ProjectVoteValidator } from '@/lib/validators/vote'
import { CachedProject } from '@/types/redis'
import { z } from 'zod'

const CACHE_AFTER_UPVOTES = 1

export async function PATCH(req: Request) {
  try {
    const body = await req.json()

    const { projectId, voteType } = ProjectVoteValidator.parse(body)

    const session = await getAuthSession()

    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 })
    }

    // check if user has already voted on this project
    const existingVote = await db.vote.findFirst({
      where: {
        userId: session.user.id,
        projectId,
      },
    })

    const project = await db.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        author: true,
        votes: true,
      },
    })

    if (!project) {
      return new Response('Project not found', { status: 404 })
    }

    if (existingVote) {
      // if vote type is the same as existing vote, delete the vote
      if (existingVote.type === voteType) {
        await db.vote.delete({
          where: {
            userId_projectId: {
              projectId,
              userId: session.user.id,
            },
          },
        })

        // Recount the votes
        const votesAmt = project.votes.reduce((acc, vote) => {
          if (vote.type === 'UP') return acc + 1
          if (vote.type === 'DOWN') return acc - 1
          return acc
        }, 0)

        if (votesAmt >= CACHE_AFTER_UPVOTES) {
          const cachePayload: CachedProject = {
            authorUsername: project.author.username ?? '',
            content: JSON.stringify(project.content),
            id: project.id,
            title: project.title,
            currentVote: null,
            createdAt: project.createdAt,
          }

          await redis.hset(`project:${projectId}`, cachePayload) // Store the project data as a hash
        }

        return new Response('OK')
      }

      // if vote type is different, update the vote
      await db.vote.update({
        where: {
          userId_projectId: {
            projectId,
            userId: session.user.id,
          },
        },
        data: {
          type: voteType,
        },
      })

      // Recount the votes
      const votesAmt = project.votes.reduce((acc, vote) => {
        if (vote.type === 'UP') return acc + 1
        if (vote.type === 'DOWN') return acc - 1
        return acc
      }, 0)

      if (votesAmt >= CACHE_AFTER_UPVOTES) {
        const cachePayload: CachedProject = {
          authorUsername: project.author.username ?? '',
          content: JSON.stringify(project.content),
          id: project.id,
          title: project.title,
          currentVote: voteType,
          createdAt: project.createdAt,
        }

        await redis.hset(`project:${projectId}`, cachePayload) // Store the project data as a hash
      }

      return new Response('OK')
    }

    // if no existing vote, create a new vote
    await db.vote.create({
      data: {
        type: voteType,
        userId: session.user.id,
        projectId,
      },
    })

    // Recount the votes
    const votesAmt = project.votes.reduce((acc, vote) => {
      if (vote.type === 'UP') return acc + 1
      if (vote.type === 'DOWN') return acc - 1
      return acc
    }, 0)

    if (votesAmt >= CACHE_AFTER_UPVOTES) {
      const cachePayload: CachedProject = {
        authorUsername: project.author.username ?? '',
        content: JSON.stringify(project.content),
        id: project.id,
        title: project.title,
        currentVote: voteType,
        createdAt: project.createdAt,
      }

      await redis.hset(`project:${projectId}`, cachePayload) // Store the project data as a hash
    }

    return new Response('OK')
  } catch (error) {
    (error)
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 })
    }

    return new Response(
      'Could not project to subreddit at this time. Please try later',
      { status: 500 }
    )
  }
}