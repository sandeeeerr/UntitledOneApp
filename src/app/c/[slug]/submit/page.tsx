
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
      <div className='pb-5'>
        <div className='flex flex-wrap items-baseline -mt-2 -ml-2'>
          <h1 className='text-3xl font-bold md:text-4xl '>
            Create Project
          </h1>
          <h2 className='mt-1 ml-2 text-base truncate'>
            in c/{params.slug}
          </h2>
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