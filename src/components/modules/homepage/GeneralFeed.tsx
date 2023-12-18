import { db } from '@/lib/db'

import { formatTimeToNow } from '@/lib/utils'
import ProjectFeed from '../ProjectFeed'
import { INFINITE_SCROLL_PAGINATION_RESULTS } from '@/config'
import { Folder, Users } from 'lucide-react'
import Link from "next/link";
import { buttonVariants } from "@/components/elements/Button";
import Project from '../Project';

const GeneralFeed = async () => {
  const projects = await db.project.findMany({
    take: 4,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      votes: true,
      author: true,
      comments: true,
      community: true,
    },
  })

  const communitys = await db.community.findMany({
    take: 4,
    include: {
      projects: {
        include: {
          author: true,
          votes: true,
          comments: true,
          community: true,
        },
        orderBy: {
          createdAt: 'desc'
        },
      },
      subscribers: {
        
      }
    },
  })

  return (
    <>
      <div className="flow-root mb-4">  
        <h3 className="float-left overflow-hidden max-w-50">Populair communitys:</h3>
        <div className="float-right">
        <Link
          className={buttonVariants({
            className: "my-2",
            variant: "ghost",
          })}
          href={`/c/create`}
        >
          Create Community
        </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-2 mb-12 sm:gap-4 md:grid-cols-4" id="frameworks-integration">
        {communitys.map(community=>(
          <a className="grid w-full min-w-[7rem] transform cursor-pointer rounded-xl bg-darkGrey transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" href={`c/${community.name}`}>

            <div className='z-10 p-3 pt-10 ottom-0 sm:p-5 sm:pt-14'>
              <h1 className='mb-0 text-base font-semibold leading-6 text-white sm:mb-1 sm:text-xl'>
                {community.name}

              </h1>
              <div className='z-20 mb-1 text-sm sm:mb-2'>
                <div className='flex items-center gap-2 text-gray-300 w-fit'>
                  <Users className='w-4 h-4' /> {community.subscribers.length} subscribers
                </div>
                <div className='flex items-center gap-2 text-gray-300 w-fit'>
                  <Folder className='w-4 h-4' /> {community.projects.length} projects
                </div>
              </div>
              <div className=''>
                <div className='text-xs text-lightGrey text max-h-40'>
                  Last updated: {formatTimeToNow(new Date(community.updatedAt))}
                </div>
              </div>
            </div>
          
          </a>
        ))}      
      </div>

      <div className="flow-root mb-4">  
        <h3 className="float-left">Recent projects:</h3>
        <div className="float-right">
        <Link
          className={buttonVariants({
            className: "my-2",
            variant: "ghost",
          })}
          href={`/c/create`}
        >
          Create Project
        </Link>
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

export default GeneralFeed