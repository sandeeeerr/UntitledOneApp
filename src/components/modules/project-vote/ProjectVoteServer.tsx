import { getAuthSession } from '@/lib/auth'
import type { Project, Vote } from '@prisma/client'
import { notFound } from 'next/navigation'
import ProjectVoteClient from './ProjectVoteClient'

interface ProjectVoteServerProps {
  projectId: string
  initialVotesAmt?: number
  initialVote?: Vote['type'] | null
  getData?: () => Promise<(Project & { votes: Vote[] }) | null>
}

/**
 * We split the ProjectVotes into a client and a server component to allow for dynamic data
 * fetching inside of this component, allowing for faster page loads via suspense streaming.
 * We also have to option to fetch this info on a page-level and pass it in.
 *
 */

const ProjectVoteServer = async ({
  projectId,
  initialVotesAmt,
  initialVote,
  getData,
}: ProjectVoteServerProps) => {
  const session = await getAuthSession()

  let _votesAmt: number = 0
  let _currentVote: Vote['type'] | null | undefined = undefined

  if (getData) {
    // fetch data in component
    const project = await getData()
    if (!project) return notFound()

    _votesAmt = project.votes.reduce((acc, vote) => {
      if (vote.type === 'UP') return acc + 1
      if (vote.type === 'DOWN') return acc - 1
      return acc
    }, 0)

    _currentVote = project.votes.find(
      (vote) => vote.userId === session?.user?.id
    )?.type
  } else {
    // passed as props
    _votesAmt = initialVotesAmt!
    _currentVote = initialVote
  }

  return (
    <ProjectVoteClient
      projectId={projectId}
      initialVotesAmt={_votesAmt}
      initialVote={_currentVote}
    />
  )
}

export default ProjectVoteServer