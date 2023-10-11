import React from 'react'
import ColorBlock from '@element/ColorBlock';
import Devider from '@element/Devider';

function ColorScheme() {
  return (
    <>
      <h4>Brand colors</h4>
      <p className='mb-5 font-small text-gray-400'>Utilizing a vibrant, trustworthy blue as our primary and a lively, positive green as our secondary, our brand colors not only enhance user engagement and trust but also provide a coherent and visually appealing interface across all platforms and materials, seamlessly blending reliability with vibrancy.</p>
        <div className='grid gap-4 lg:grid-cols-4 lg:grid-rows-1'>
          <ColorBlock name='primary' hex='#31A0F0' textColor='black' />
          <ColorBlock name='secondary' hex='#31F080' textColor='black' />
        </div>
        <Devider /> 

      <h4>Greyscales</h4>
      <p className='mb-5 font-small text-gray-400'>Our grayscale palette, ranging from deep black to light grey, encompasses five nuanced shades meticulously chosen to provide depth, contrast, and readability across all design elements</p>
        <div className='grid gap-4 lg:grid-cols-4 lg:grid-rows-1 mb-6'>
          <ColorBlock name='black' hex='#111111' textColor='white' />
          <ColorBlock name='background' hex='#212121' textColor='white' />
          <ColorBlock name='backgroundSecondary' hex='#2F2F2F' textColor='white' />
          <ColorBlock name='darkGrey' hex='#474747' textColor='white' />
          <ColorBlock name='lightGrey' hex='#AFAFAF' textColor='black' />
        </div>
        <Devider /> 

      <h4>UI Colors</h4>
      <p className='mb-5 font-small text-gray-400'>Utilizing our brand's blue and green for general UI, and incorporating a notable red for danger and a vivid yellow for warnings, we ensure our interface is not only visually cohesive but also effectively communicative regarding alerts and user guidance.</p>
        <div className='grid gap-4 lg:grid-cols-4 lg:grid-rows-1'>
          <ColorBlock name='primary' hex='#31A0F0' />
          <ColorBlock name='secondary' hex='#31F080' />
          <ColorBlock name='amber-400' hex='#31F080' />
          <ColorBlock name='danger' hex='#31F080' textColor='white' />
        </div>
    </>
  )
}

export default ColorScheme