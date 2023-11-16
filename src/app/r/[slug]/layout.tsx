
import { buttonVariants } from '@/components/elements/Button'
import SubscribeLeaveToggle from '@/components/modules/SubscribeLeaveToggle'
import ToFeedButton from '@/components/modules/ToFeedButton'
import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { format } from 'date-fns'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'UntitledOne',
  description: '',
}

const Layout = async ({
  children,
  params: { slug },
}: {
  children: ReactNode
  params: { slug: string }
}) => {
  const session = await getAuthSession()

  const community = await db.community.findFirst({
    where: { name: slug },
    include: {
      projects: {
        include: {
          author: true,
          votes: true,
        },
      },
    },
  })

  const subscription = !session?.user
    ? undefined
    : await db.subscription.findFirst({
        where: {
          community: {
            name: slug,
          },
          user: {
            id: session.user.id,
          },
        },
      })

  const isSubscribed = !!subscription

  if (!community) return notFound()

  const memberCount = await db.subscription.count({
    where: {
      community: {
        name: slug,
      },
    },
  })

  return (
    <div className='h-full pt-12 mx-auto sm:container max-w-7xl'>
      <div>
        <div className='grid grid-cols-1 py-6 md:grid-cols-3 gap-y-4 md:gap-x-4'>

          {/* info sidebar */}
          <div className='order-first overflow-hidden border-l darkGrey h-fit md:order-last'>
            <div className='px-6 py-4'>
              <p className='font-semibold'>About r/{community.name}</p>
            </div>
            <dl className='px-6 pb-6 text-sm leading-6'>
              <div className='flex justify-between py-3 gap-x-4'>
                <dt className='text-gray-400'>Created</dt>
                <dd className='text-gray-500'>
                  <time dateTime={community.createdAt.toDateString()}>
                    {format(community.createdAt, 'MMMM d, yyyy')}
                  </time>
                </dd>
              </div>
              <div className='flex justify-between py-2 gap-x-4'>
                <dt className='text-gray-400'>Members</dt>
                <dd className='flex items-start gap-x-2'>
                  <div className='text-gray-500'>{memberCount}</div>
                </dd>
              </div>
              {community.creatorId === session?.user?.id ? (
                <div className='flex justify-between py-2 gap-x-4'>
                  <dt className='text-gray-500'>You created this community</dt>
                </div>
              ) : null}
              <div className='py-6'>
                {community.creatorId !== session?.user?.id ? (
                  <SubscribeLeaveToggle
                    isSubscribed={isSubscribed}
                    communityId={community.id}
                    communityName={community.name}
                  />
                ) : null}
                <Link
                  className={buttonVariants({
                    variant: 'secondary',
                    className: 'w-full mb-6',
                  })}
                  href={`r/${slug}/submit`}>
                  Create Post
                </Link>
              </div>
            </dl>
          </div>
          <ul className='flex flex-col col-span-2 space-y-6'>{children}</ul>
        </div>
      </div>
    </div>
  )
}

export default Layout