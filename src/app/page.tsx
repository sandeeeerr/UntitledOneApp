import { buttonVariants } from '@/components/elements/Button'
import CustomFeed from '@/components/modules/homepage/CustomFeed'
import GeneralFeed from '@/components/modules/homepage/GeneralFeed'
import { getAuthSession } from '@/lib/auth'
import { Home as HomeIcon } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Home() {
  const session = await getAuthSession()

  return (
    <>
      <h1 className='text-3xl font-bold md:text-4xl'>Your feed</h1>
      <div className=''>
        {/* @ts-expect-error server component */}
        {session ? <CustomFeed /> : <GeneralFeed />}
      </div>
    </>
  )
}