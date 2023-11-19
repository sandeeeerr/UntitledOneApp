// import MiniCreatePost from '@/components/MiniCreatePost'
import MiniCreateProject from '@/components/modules/MiniCreateProject'
import PostFeed from '@/components/modules/PostFeed'
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

  const community = await db.community.findFirst({
    where: { name: slug },
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

  if (!community) return notFound()

  return (
    <>
      <h1 className='text-3xl font-bold md:text-4xl h-14 '>
        c/{community.name}
      </h1>
      {session?.user ? (
        <>
          <MiniCreateProject session={session} />
        </>
      ) : (
        <>
          sign in to create a project
        </>
      )}
      
      <PostFeed initialPosts={community.projects} communityName={community.name} />
    </>
  )
}

export default page