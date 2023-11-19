
import { Button } from '@/components/elements/Button'
import { Editor } from '@/components/modules/Editor'
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'

interface pageProps {
  params: {
    slug: string
  }
}

const page = async ({ params }: pageProps) => {
  const community = await db.community.findFirst({
    where: {
      name: params.slug,
    },
  })

  if (!community) return notFound()

  return (
    <div className='flex flex-col items-start gap-6'>
      {/* heading */}
      <div className='pb-5 border-b border-gray-200'>
        <div className='flex flex-wrap items-baseline -mt-2 -ml-2'>
          <h3 className='mt-2 ml-2 text-base font-semibold leading-6 text-gray-900'>
            Create Project
          </h3>
          <p className='mt-1 ml-2 text-sm text-gray-500 truncate'>
            in r/{params.slug}
          </p>
        </div>
      </div>

      {/* form */}
      <Editor communityId={community.id} />

      <div className='flex justify-end w-full'>
        <Button type='submit' className='w-full' form='community-project-form'>
          Project
        </Button>
      </div>
    </div>
  )
}

export default page