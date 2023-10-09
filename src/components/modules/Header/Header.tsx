"use client"

import React from "react";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import {Button} from "@element/Button";


export default function Header() {
  const router = useRouter()
  const [display, setDisplay] = useState(false);
  return (
  <>
    <nav className="bg-backgroundOverlays fixed w-full top-0 z-10 border-y-2 border-t-transparent">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex space-x-4">

          <Link href="/">
            <p className="flex items-center py-5 pr-2 text-lg text-white">
              <span className="font-bold">UntitledOne</span>
            </p>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <a href="/" className="py-5 px-3 text-white hover:text-gray-200">Home</a>
            <a href="#" onClick={() => router.push('explore')} className="py-5 px-3 text-white hover:text-gray-200">Explore</a>
          </div>
          
        </div>


        <div className="hidden md:flex items-center space-x-1">
          <a href="/" className="py-5 px-3 text-gray-400">Login</a>
          <Button
            onClick={() => router.push('login')}>
            Signup
          </Button>
        </div>


        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button text-white" onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          </button>
        </div>

      </div>
    </div>


    <div className="mobile-menu h-screen border-t px-20 pt-10" style={{ display: display ? "block" : "none" }}>
      <a href="#" className="block py-4 px-4 text-center border-b border-neutral-800" onClick={() => router.push('')}>Home</a>
      <a href="#" className="block py-4 px-4 text-center border-b border-neutral-800" onClick={() => router.push('explore')}>Explore</a>
      <a href="#" className="block py-4 px-4 text-center border-b border-neutral-800">login</a>
    </div>
  </nav>
  </>
  )
}