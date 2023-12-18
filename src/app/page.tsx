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
      <div className=''>
        {/* @ts-expect-error server component */}
        {session ? <CustomFeed /> : 
        <section className="bg-black rounded-lg">
          <div className="max-w-screen-xl px-0 py-8 mx-auto mb-10 sm:py-10 lg:px-0">
              <div className="max-w-screen-sm mx-auto text-center">
                  <h2 className="mb-3 text-4xl font-extrabold leading-tight tracking-tight text-white">Elevate Your Sound!</h2>
                  <p className="mb-4 font-light text-gray-400 md:text-lg">Connect, Collaborate, and Get Feedback from Fellow Artists.</p>
                  <Link
                    className={buttonVariants({
                      className: "",
                      variant: "default",
                      
                    })}
                    href={`/c/create`}
                  >
                    Join Now
                  </Link>
              </div>
          </div>
        </section>
        }
        {/* @ts-expect-error server component */}
        <GeneralFeed />
      </div>
    </>
  )
}