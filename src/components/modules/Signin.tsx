import Link from 'next/link'
import { Icons } from '../elements/Icons'
import UserAuthForm from './UserAuthForm'

const SignIn = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className=''>Welcome back</h1>
        <p className='max-w-xs mx-auto text-sm'>
          By continuing, you are setting up a UntitledOne account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthForm />
      <p className='px-8 text-sm text-center text-muted-foreground'>
        New to UntitledOne?{' '}
        <Link
          href='/sign-up'
          className='text-sm underline hover:text-brand underline-offset-4'>
          Sign Up
        </Link>
      </p>
    </div>
  )
}

export default SignIn