'use client'

import Image from 'next/image'

function CustomFileRender({ data }: any) {
  const src = data.file.url

  return (
    <div className='relative w-full'>
      <audio
        controls
        src={src}>
            Your browser does not support the
            <code>audio</code> element.
      </audio>
    </div>
  )
}

export default CustomFileRender