import { redirect } from 'next/navigation'


import { authOptions, getAuthSession } from '@/lib/auth'
import Link from 'next/link'
import {Button, buttonVariants} from "@element/Button";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import folderSVG from '@/assets/project.svg'

export const metadata = {
  title: 'Projects',
  description: 'Manage account and website settings.',
}

export default async function SettingsPage() {
  const session = await getAuthSession()

  if (!session?.user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  return (
    <>
      <h1>Projects</h1>
      {/* <ul>
        <li><span className='font-bold '>id:</span> {session.user.id}</li>
        <li><span className='font-bold '>name:</span> {session.user.name}</li>
        <li><span className='font-bold '>mail:</span> {session.user.email}</li>
        <li><span className='font-bold '>image:</span> {session.user.image}</li>
        <li><span className='font-bold '>username:</span> {session.user.username}</li>
      </ul> */}
      <Image
        src={folderSVG}
        alt="My SVG"
        width={200}
        height={200}
      />
      
    </>
  )
}