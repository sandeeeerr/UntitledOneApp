import React from "react";

import { ShowcaseBlock } from "@element/ShowcaseBlock";

import Devider from "@/components/elements/Devider";
import Breadcrumb from "@/components/elements/Breadcrumb";
import { Avatar, AvatarFallback } from "@/components/elements/Avatar";
import Image from "next/image";

function AvatarsStyleguide() {
  return (
    <>
      <h4>Nav</h4>
      <p className="mb-5 font-small text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <ShowcaseBlock gridCols="3">
        <div className="items-center justify-center flex h-full">
          <Avatar className="h-10 w-10">
            <Image
              fill
              src="/notFound.jpg"
              alt="profile picture"
              referrerPolicy="no-referrer"
            />
          </Avatar>
        </div>
        <div className="items-center justify-center flex h-full">
          <Avatar className="h-20 w-20">
            <Image
              fill
              src="/notFound.jpg"
              alt="profile picture"
              referrerPolicy="no-referrer"
            />
          </Avatar>
        </div>
        <div className="items-center justify-center flex h-full">
          <Avatar className="h-36 w-36">
            <Image
              fill
              src="/notFound.jpg"
              alt="profile picture"
              referrerPolicy="no-referrer"
            />
          </Avatar>
        </div>
      </ShowcaseBlock>

      <pre className="border-2  bg-[#2a2a2b] rounded mt-3">
        <code className="markdown xml">
          {`<Avatar className='h-10 w-10'>
  <Image fill src='/notFound.jpg' alt='avatar' referrerPolicy='no-referrer' />
</Avatar>

<Avatar className='h-20 w-20'>
  <Image fill src='/notFound.jpg' alt='avatar' referrerPolicy='no-referrer' />
</Avatar>

<Avatar className='h-30 w-30'>
  <Image fill src='/notFound.jpg' alt='avatar' referrerPolicy='no-referrer' />
</Avatar>`}
        </code>
      </pre>
    </>
  );
}

export default AvatarsStyleguide;
