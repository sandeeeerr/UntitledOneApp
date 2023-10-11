import React from 'react'
import ColorBlock from '@element/ColorBlock';
import Devider from '@element/Devider';

function ColorScheme() {
  return (
    <>
      <h4>Brand colors</h4>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='grid gap-4 lg:grid-cols-4 lg:grid-rows-1'>
          <ColorBlock name='primary' hex='#31A0F0' textColor='black' />
          <ColorBlock name='secondary' hex='#31F080' textColor='black' />
        </div>
        <Devider /> 

      <h4>Greyscales</h4>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='grid gap-4 lg:grid-cols-4 lg:grid-rows-1 mb-6'>
          <ColorBlock name='black' hex='#111111' textColor='white' />
          <ColorBlock name='background' hex='#212121' textColor='white' />
          <ColorBlock name='backgroundSecondary' hex='#2F2F2F' textColor='white' />
          <ColorBlock name='darkGrey' hex='#474747' textColor='white' />
          <ColorBlock name='lightGrey' hex='#AFAFAF' textColor='black' />
        </div>
        <Devider /> 

      <h4>UI Colors</h4>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='grid gap-4 lg:grid-cols-4 lg:grid-rows-1'>
          <ColorBlock name='primary' hex='#31A0F0' />
          <ColorBlock name='secondary' hex='#31F080' />
          <ColorBlock name='amber-500' hex='#31F080' />
          <ColorBlock name='danger' hex='#31F080' textColor='white' />
        </div>
    </>
  )
}

export default ColorScheme