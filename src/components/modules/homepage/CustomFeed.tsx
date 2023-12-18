import { INFINITE_SCROLL_PAGINATION_RESULTS } from '@/config'
import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import ProjectFeed from '../ProjectFeed'
import { notFound } from 'next/navigation'
import Link from "next/link";
import { buttonVariants } from "@/components/elements/Button";
import Project from '../Project';

const CustomFeed = async () => {
  const session = await getAuthSession()

  // only rendered if session exists, so this will not happen
  if (!session) return notFound()

  const followedCommunities = await db.subscription.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      community: true,
    },
  })

  const projects = await db.project.findMany({
    where: {
      community: {
        name: {
          in: followedCommunities.map((sub) => sub.community.name),
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      votes: true,
      author: true,
      comments: true,
      community: true,
    },
    take: 4,
  })

  return (
    <>

      <div className="flow-root mb-4">  
        <h3 className="float-left">Projects for you:</h3>
        <div className="float-right">
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-2 mb-12 sm:gap-4 md:grid-cols-4" id="frameworks-integration">
      {projects.map((project, index) => {
        const votesAmt = project.votes.reduce((acc, vote) => {
          if (vote.type === 'UP') return acc + 1
          if (vote.type === 'DOWN') return acc - 1
          return acc
        }, 0)

        return (
          <Project
            key={project.id}
            project={project}
            commentAmt={project.comments.length}
            communityName={project.community.name}
            votesAmt={votesAmt}
          />
        )
      })}    
      </div>
    </>
  )

}

export default CustomFeed