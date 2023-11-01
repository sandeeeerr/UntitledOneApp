
import { authOptions, getAuthSession } from '@/lib/auth'
import { getServerSession } from 'next-auth'

import React from "react";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import {Button, buttonVariants} from "@element/Button";
import { Avatar } from '@/components/elements/Avatar';
import Image from 'next/image';
import { cn } from "@/lib/utils";

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

          <div className="items-center hidden md:flex">
            <Link href='/' className={buttonVariants({ variant: 'ghost' })}>
              Home
            </Link>     
            <Link href='/explore' className={buttonVariants({ variant: 'ghost' })}>
              Expore
            </Link>       
          </div>
        </div>

        <div className="flex items-center space-x-1">
          {session?.user ? (
            <>
              <Link href='/projects' className={cn( buttonVariants({ variant: 'ghost' }) , '')}>
                Projects
              </Link>
              <li className='list-none'>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full ml-1 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">
                  <Avatar className='w-10 h-10'>
                    <Image fill src={session.user.image} alt='profile picture' referrerPolicy='no-referrer' />
                  </Avatar>  
                </button>    
                <div id="dropdownNavbar" className="z-10 hidden px-1 my-5 text-base text-center list-none bg-black border rounded shadow w-44">
                  <ul className="py-1 list-none" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link href='/profile' className={cn(buttonVariants({ variant: 'ghost' }), 'w-full')}>
                        Profile
                      </Link>                     
                    </li>
                    <li>
                      <Link href='/settings' className={cn(buttonVariants({ variant: 'ghost' }), 'w-full')}>
                        Settings
                      </Link>                     
                    </li>
                  </ul>
                  <div className="py-1 border-t">
                    <Link href='/api/auth/signout' className={cn(buttonVariants({ variant: 'ghost' }), 'w-full')}>
                      Sign Out
                    </Link>                  
                  </div>
                </div>
              </li>
              <Link href='settings'>
            
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

      </div>
    </div>


    <div className="hidden h-screen px-20 pt-10 border-t mobile-menu ">
      <a href="#" className="block px-4 py-4 text-center border-b border-neutral-800">Home</a>
      <a href="#" className="block px-4 py-4 text-center border-b border-neutral-800">Explore</a>
      <a href="#" className="block px-4 py-4 text-center border-b border-neutral-800">login</a>
    </div>
  </nav>

  
  </>
  )
}

export default Header