// import CustomFeed from '@/components/homepage/CustomFeed'
import { buttonVariants } from "@/components/elements/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

// import { INFINITE_SCROLL_PAGINATION_RESULTS } from '@/config'
import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import Image from "next/image";
import folderSVG from "@/assets/project.svg";


interface PageProps {
  params: {
    slug: string
  }
}

const page = async ({ params }: PageProps) => {
  const { slug } = params

  const session = await getAuthSession()

  const communitys = await db.community.findMany({
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
        // take: INFINITE_SCROLL_PAGINATION_RESULTS,
      },
    },
  })

  if (!communitys) return notFound()

  return (
    <>
      <h1 className="mb-12">Your feed</h1>
      
      <div className="flow-root mb-4">  
        <h3 className="float-left">populair communitys:</h3>
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
      
      <div className="grid grid-cols-2 gap-6 mt-2 mb-12 md:grid-cols-5" id="frameworks-integration">
        {communitys.map(community=>(
          <a className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl bg-darkGrey px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" href={`c/${community.name}`}>
            <span className="grid w-24 h-24 my-6 place-items-center">
              {community.name}
            </span>
          </a>
        ))}      
      </div>

      <div className="flow-root mb-4">  
        <h3 className="float-left">populair projects:</h3>
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
      <div className="grid grid-cols-2 gap-6 mt-2 mb-8 md:grid-cols-5" id="frameworks-integration">
        <Image src={folderSVG} alt="My SVG" height={160} />    
        <Image src={folderSVG} alt="My SVG" height={160} />   
        <Image src={folderSVG} alt="My SVG" height={160} />   
        <Image src={folderSVG} alt="My SVG" height={160} />   
        <Image src={folderSVG} alt="My SVG" height={160} />   
      </div>

    </>
  )
}

export default page