
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

import React from "react";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import {Button, buttonVariants} from "@element/Button";

const Header = async () => {


  const session = await getServerSession(authOptions)
  return (
  <>
    <nav className="bg-black fixed w-full top-0 z-10 border-y-2 border-t-transparent">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex space-x-4">

          <Link href="/">
            <p className="flex items-center py-5 pr-2 text-lg text-white">
              <span className="font-bold">UntitledOne</span>
            </p>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link href='/' className={buttonVariants({ variant: 'ghost' })}>
              Home
            </Link>     
            <Link href='/explore' className={buttonVariants({ variant: 'ghost' })}>
              Expore
            </Link>       
          </div>
          
        </div>



        <div className="hidden md:flex items-center space-x-1">
          {session?.user ? (
            <>
              <Link href='/api/auth/signout' className={buttonVariants({ variant: 'ghost' })}>
                Sign out
              </Link>
              <Link href='/settings' className={buttonVariants()}>
                Settings
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


        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button text-white" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          </button>
        </div>

      </div>
    </div>


    <div className="mobile-menu h-screen border-t px-20 pt-10 hidden">
      <a href="#" className="block py-4 px-4 text-center border-b border-neutral-800">Home</a>
      <a href="#" className="block py-4 px-4 text-center border-b border-neutral-800">Explore</a>
      <a href="#" className="block py-4 px-4 text-center border-b border-neutral-800">login</a>
    </div>
  </nav>
  </>
  )
}

export default Header