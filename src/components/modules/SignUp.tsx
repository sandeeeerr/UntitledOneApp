
import Link from 'next/link'
import UserAuthForm from './UserAuthForm'
import { Icons } from '@element/Icons'

const SignUp = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className=''>Sign Up</h1>
        <p className='max-w-xs mx-auto text-sm'>
          By continuing, you are setting up a UntitledOne account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthForm />
      <p className='px-8 text-sm text-center text-muted-foreground'>
        Already a UntitledOne user?{' '}
        <Link
          href='/sign-in'
          className='text-sm underline hover:text-brand underline-offset-4'>
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default SignUp