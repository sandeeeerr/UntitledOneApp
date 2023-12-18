// import CommentsSection from '@/components/CommentsSection'
import { buttonVariants } from '@/components/elements/Button'
import EditorOutput from '@/components/modules/EditorOutput'
import ProjectVoteServer from '@/components/modules/project-vote/ProjectVoteServer'
import { db } from '@/lib/db'
import { redis } from '@/lib/redis'
import { formatTimeToNow } from '@/lib/utils'
import { CachedProject } from '@/types/redis'
import { Project, User, Vote } from '@prisma/client'
import { ArrowBigDown, ArrowBigUp, Loader2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

interface SubRedditProjectPageProps {
  params: {
    projectId: string
  }
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

const SubRedditProjectPage = async ({ params }: SubRedditProjectPageProps) => {
  const cachedProject = (await redis.hgetall(
    `project:${params.projectId}`
  )) as CachedProject

  let project: (Project & { votes: Vote[]; author: User }) | null = null

  if (!cachedProject) {
    project = await db.project.findFirst({
      where: {
        id: params.projectId,
      },
      include: {
        votes: true,
        author: true,
      },
    })
  }

  if (!project && !cachedProject) return notFound()

  return (
    <div>
      <div className='flex flex-col items-center justify-between h-full overflow-hidden rounded-md shadow bg-darkGrey sm:flex-row sm:items-start'>
        <Suspense fallback={<ProjectVoteShell />}>
          {/* @ts-ignore-error */}
          <ProjectVoteServer
            projectId={project?.id ?? cachedProject.id}
            getData={async () => {
              return await db.project.findUnique({
                where: {
                  id: params.projectId,
                },
                include: {
                  votes: true,
                },
              })
            }}
          />
        </Suspense>

        <div className='flex-1 w-full p-4 rounded-sm sm:w-0'>
          <p className='mt-1 text-xs text-gray-500 truncate max-h-40'>
            Projected by u/{project?.author.username ?? cachedProject.authorUsername}{' '}
            {formatTimeToNow(new Date(project?.createdAt ?? cachedProject.createdAt))}
          </p>
          <h1 className='py-2 text-xl font-semibold leading-6 text-wite'>
            {project?.title ?? cachedProject.title}
          </h1>

          <EditorOutput content={project?.content ?? cachedProject.content} />
          
          <Suspense
            fallback={
              <Loader2 className='w-5 h-5 animate-spin text-zinc-500' />
            }>
            {/* @ts-ignore-error */}
            {/* <CommentsSection projectId={project?.id ?? cachedProject.id} /> */}
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function ProjectVoteShell() {
  return (
    <div className='flex flex-col items-center w-20 pr-6'>
      {/* upvote */}
      <div className={buttonVariants({ variant: 'ghost' })}>
        <ArrowBigUp className='w-5 h-5 text-zinc-700' />
      </div>

      {/* score */}
      <div className='py-2 text-sm font-medium text-center text-zinc-900'>
        <Loader2 className='w-3 h-3 animate-spin' />
      </div>

      {/* downvote */}
      <div className={buttonVariants({ variant: 'ghost' })}>
        <ArrowBigDown className='w-5 h-5 text-zinc-700' />
      </div>
    </div>
  )
}

export default SubRedditProjectPage