import { db } from '@/lib/db'
import ProjectFeed from '../ProjectFeed'
import { INFINITE_SCROLL_PAGINATION_RESULTS } from '@/config'
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
    },
  })

  return (
    <>
      <div className="flow-root mb-4">  
        <h3 className="float-left">recent communitys:</h3>
        <div className="float-right">
        <Link
          className={buttonVariants({
            className: "my-2",
          })}
          href={`/c/create`}
        >
          Create Community
        </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-2 mb-12 md:grid-cols-4" id="frameworks-integration">
        {communitys.map(community=>(
          <a className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl bg-darkGrey px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" href={`c/${community.name}`}>
            <span className="grid w-24 h-24 my-6 place-items-center">
              {community.name}
              {community.projects.length}
            </span>
          </a>
        ))}      
      </div>

      <div className="flow-root mb-4">  
        <h3 className="float-left">recent projects:</h3>
        <div className="float-right">
        <Link
          className={buttonVariants({
            className: "my-2",
          })}
          href={`/c/create`}
        >
          Create Project
        </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-2 mb-12 md:grid-cols-4" id="frameworks-integration">
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