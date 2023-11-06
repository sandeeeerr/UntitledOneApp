<<<<<<< HEAD
// import CustomFeed from '@/components/homepage/CustomFeed'
import { buttonVariants } from "@/components/elements/Button";

import { getAuthSession } from "@/lib/auth";
import { Home as HomeIcon } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  const session = await getAuthSession();
=======
import MusicCard from '@element/MusicCard'
import CommingSoon from '@module/CommingSoon/CommingSoon'
import Image from 'next/image'

>>>>>>> parent of 9c4abad (1.2)

export default function Home() {
  return (
<<<<<<< HEAD
    <>
      <h1 className="">Your feed</h1>
      <Link
        className={buttonVariants({
          className: "",
        })}
        href={`/r/create`}
      >
        Create Community
      </Link>
    </>
  );
=======
    <div className='text-center'>
      <CommingSoon />
    </div>
  )
>>>>>>> parent of 9c4abad (1.2)
}
