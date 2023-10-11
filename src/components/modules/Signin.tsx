import { Icons } from '@element/Icons'
import UserAuthForm from '@module/UserAuthForm'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px] bg-black p-12 rounded-xl border-2'>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className='text-5xl font-semibold tracking-tight border-b-2 pb-2 mb-10'>Welcome back</h1>
        <p className='text-sm max-w-xs mx-auto'>
          By continuing, you are setting up a UntitledOne account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthForm />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        New to UntitledOne?{' '}
        <Link
          href='/sign-up'
          className='hover:text-brand text-sm underline underline-offset-4'>
          Sign Up
        </Link>
      </p>
    </div>
  )
}

export default SignIn