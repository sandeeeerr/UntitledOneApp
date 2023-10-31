
import { authOptions, getAuthSession } from '@/lib/auth'
import { getServerSession } from 'next-auth'

import React from "react";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import {Button, buttonVariants} from "@element/Button";
import { Avatar } from '@/components/elements/Avatar';
import Image from 'next/image';


const Header = async () => {

  const session = await getServerSession(authOptions)
  if (!session?.user) {
    // redirect(authOptions?.pages?.signIn || '/login')
  }
  return (
  <>
    <nav className="fixed top-0 z-10 w-full bg-black border-y-2 border-t-transparent">
    <div className="max-w-6xl px-4 mx-auto">
      <div className="flex justify-between">
        <div className="flex space-x-4">

          <Link href="/">
            <p className="flex items-center py-5 pr-2 text-lg text-white">
              <span className="font-bold">UntitledOne</span>
            </p>
          </Link>

          <div className="items-center hidden space-x-1 md:flex">
            <Link href='/' className={buttonVariants({ variant: 'ghost' })}>
              Home
            </Link>     
            <Link href='/explore' className={buttonVariants({ variant: 'ghost' })}>
              Expore
            </Link>       
          </div>
          
        </div>



        <div className="items-center hidden space-x-1 md:flex">
          {session?.user ? (
            <>
              <Link href='/api/auth/signout' className={buttonVariants({ variant: 'ghost' })}>
                Sign out
              </Link>
              <Link href='settings'>
                <Avatar className='w-10 h-10'>
                  <Image fill src={session.user.image} alt='profile picture' referrerPolicy='no-referrer' />
                </Avatar>              
              </Link>
            </>
          ) : (
            <>
              <Link href='/sign-in' className={buttonVariants({ variant: 'ghost' })}>
                Sign In
              </Link>
              <Link href='/sign-up' className={buttonVariants()}>
                Sign Up
              </Link>
            </>
          )}
        </div>


        <div className="flex items-center md:hidden">
          <button className="text-white mobile-menu-button" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          </button>
        </div>

      </div>
    </div>


    <div className="hidden h-screen px-20 pt-10 border-t mobile-menu">
      <a href="#" className="block px-4 py-4 text-center border-b border-neutral-800">Home</a>
      <a href="#" className="block px-4 py-4 text-center border-b border-neutral-800">Explore</a>
      <a href="#" className="block px-4 py-4 text-center border-b border-neutral-800">login</a>
    </div>
  </nav>
  </>
  )
}

export default Header