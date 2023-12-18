'use client'

import { INFINITE_SCROLL_PAGINATION_RESULTS } from '@/config'
import { ExtendedProject } from '@/types/db'
import { useIntersection } from '@mantine/hooks'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { FC, useEffect, useRef } from 'react'
import Project from './Project'
import { useSession } from 'next-auth/react'

interface ProjectFeedProps {
  initialProjects: ExtendedProject[]
  communityName?: string
}

const ProjectFeed: FC<ProjectFeedProps> = ({ initialProjects, communityName }) => {
  const lastProjectRef = useRef<HTMLElement>(null)
  const { ref, entry } = useIntersection({
    root: lastProjectRef.current,
    threshold: 1,
  })
  const { data: session } = useSession()

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['infinite-query'],
    async ({ pageParam = 1 }) => {
      const query =
        `/api/projects?limit=${INFINITE_SCROLL_PAGINATION_RESULTS}&page=${pageParam}` +
        (!!communityName ? `&communityName=${communityName}` : '')

      const { data } = await axios.get(query)
      return data as ExtendedProject[]
    },

    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1
      },
      initialData: { pages: [initialProjects], pageParams: [1] },
    }
  )

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage() // Load more projects when the last project comes into view
    }
  }, [entry, fetchNextPage])

  const projects = data?.pages.flatMap((page) => page) ?? initialProjects

  return (
    <ul className='grid grid-cols-2 gap-3 mt-2 mb-12 sm:gap-4 md:grid-cols-3'>
      {projects.map((project, index) => {
        const votesAmt = project.votes.reduce((acc, vote) => {
          if (vote.type === 'UP') return acc + 1
          if (vote.type === 'DOWN') return acc - 1
          return acc
        }, 0)

        const currentVote = project.votes.find(
          (vote) => vote.userId === session?.user.id
        )

        if (index === projects.length - 1) {
          // Add a ref to the last project in the list
          return (
            <li key={project.id} ref={ref}>
              <Project
                project={project}
                commentAmt={project.comments.length}
                communityName={project.community.name}
                votesAmt={votesAmt}
                currentVote={currentVote}
              />
            </li>
          )
        } else {
          return (
            <Project
              key={project.id}
              project={project}
              commentAmt={project.comments.length}
              communityName={project.community.name}
              votesAmt={votesAmt}
              currentVote={currentVote}
            />
          )
        }
      })}

      {isFetchingNextPage && (
        <li className='flex justify-center'>
          <Loader2 className='w-6 h-6 text-zinc-500 animate-spin' />
        </li>
      )}
    </ul>
  )
}

export default ProjectFeed