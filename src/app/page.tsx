import MusicCard from '@element/MusicCard'
import CommingSoon from '@module/CommingSoon/CommingSoon'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='text-center'>
      <CommingSoon />
    </div>
  )
}
