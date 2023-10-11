import { buttonVariants } from '@element/Button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'
import SignIn from '@/components/modules/Signin'

const page: FC = () => {
  return (
    <div className='absolute inset-0'>
      <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20'>
        <SignIn />
      </div>
    </div>
  )
}

export default page