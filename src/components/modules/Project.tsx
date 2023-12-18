'use client'

import { formatTimeToNow } from '@/lib/utils'
import { Project, User, Vote } from '@prisma/client'
import { MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { FC, useRef } from 'react'
import EditorOutput from './EditorOutput'
import ProjectVoteCount from './project-vote/ProjectVoteCount'


type PartialVote = Pick<Vote, 'type'>

interface ProjectProps {
  project: Project & {
    author: User
    votes: Vote[]
  }
  votesAmt: number
  communityName: string
  currentVote?: PartialVote
  commentAmt: number
}

const Project: FC<ProjectProps> = ({
  project,
  votesAmt: _votesAmt,
  currentVote: _currentVote,
  communityName,
  commentAmt,
}) => {
  const pRef = useRef<HTMLParagraphElement>(null)

  return (
    <div className='relative transition-all rounded-md bg-Grey hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25' >

      <a  href={`/c/${communityName}/project/${project.id}`}>
      <svg className='hover:bg-blue-gray-50 hover:bg-opacity-25' width="292" height="233" viewBox="0 0 292 233" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 232.023H276C284.837 232.023 292 224.859 292 216.023V40.0227C292 31.1861 284.837 24.0227 276 24.0227H148.13C145.105 24.0227 142.143 23.1655 139.586 21.5505L115.091 6.0802C115.032 6.04273 114.976 6.00684 114.917 5.96908L114.913 5.96644C114.174 5.49337 108.908 2.16763 105 1.02271C101.244 -0.0777451 95.6805 -0.0196499 94.3123 0.0134652C94.103 0.0185309 93.8953 0.0226902 93.6859 0.0226902H16C7.16344 0.0226902 0 7.18613 0 16.0227V216.023C0 224.859 7.16345 232.023 16 232.023Z" fill="#474747"/>
      </svg>
      <div className='absolute bottom-0 z-10 p-5'>
        <h1 className='text-lg font-semibold leading-6 text-white'>
          {project.title}

        </h1>
        <div className='z-20 mb-2 text-sm'>
          <div className='flex items-center gap-2 text-gray-300 w-fit'>
            <MessageSquare className='w-4 h-4' /> {commentAmt} comments
          </div>
          <ProjectVoteCount initialVotesAmt={_votesAmt} />
        </div>
        <div className=''>
          <div className='text-xs text-lightGrey text max-h-40'>
            <span>Project by u/{project.author.username}</span><br />
            {formatTimeToNow(new Date(project.createdAt))}
          </div>
        </div>
      </div>
      </a>
    </div>
  )
}
export default Project
