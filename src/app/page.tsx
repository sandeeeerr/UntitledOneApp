// import CustomFeed from '@/components/homepage/CustomFeed'
import { buttonVariants } from "@/components/elements/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

// import { INFINITE_SCROLL_PAGINATION_RESULTS } from '@/config'
import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'

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
      <h1 className="">Your feed</h1>
      
      <h3>populair projects:</h3>
      
      
      <h3>populair communitys:</h3>
      <Link
        className={buttonVariants({
          className: "my-2",
        })}
        href={`/c/create`}
      >
        Create Community
      </Link>
      
      <ul>
        {communitys.map(community=>(
          <a href={`c/${community.name}`}><li>{community.name}</li></a>
        ))}      
      </ul>

    </>
  )
}

export default page