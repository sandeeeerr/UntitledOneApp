'use client'

import { FileIcon, Image as ImageIcon, Link2 } from 'lucide-react'

import { FC } from 'react'
import type { Session } from 'next-auth'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '../elements/Button'
import { Avatar } from '../elements/Avatar'
import { Input } from '../elements/Input'
import Image from 'next/image'

interface MiniCreateProjectProps {
  session: Session | null
}

const MiniCreateProject: FC<MiniCreateProjectProps> = ({ session }) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <li className='overflow-hidden rounded-md shadow bg-darkGrey'>
      <div className='flex justify-between h-full gap-6 px-6 py-4'>
        <div className='relative'>
          <Avatar className="w-10 h-10">
            <Image
              fill
              src={session.user.image}
              alt="profile picture"
              referrerPolicy="no-referrer"
            />
          </Avatar>
          <span className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full outline outline-2 outline-white' />
        </div>
        <Input
          onClick={() => router.push(pathname + '/submit')}
          readOnly
          placeholder='Create project'
        />
        <Button
          onClick={() => router.push(pathname + '/submit')}
          variant='ghost'>
          <FileIcon className='text-white' />
        </Button>
      </div>
    </li>
  )
}

export default MiniCreateProject