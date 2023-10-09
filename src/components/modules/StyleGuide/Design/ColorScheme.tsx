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
          <ColorBlock name='background' hex='#31F080' textColor='white' />
          <ColorBlock name='backgroundOverlays' hex='#31F080' textColor='white' />
        </div>
        <div className='grid gap-4 lg:grid-cols-4 lg:grid-rows-1'>
          <ColorBlock name='gray-50' hex='#31A0F0' />
          <ColorBlock name='gray-200' hex='#31F080' />
          <ColorBlock name='gray-300' hex='#31F080' />
          <ColorBlock name='gray-300' hex='#31F080' />
          <ColorBlock name='gray-500' hex='#31A0F0' textColor='white' />
          <ColorBlock name='gray-600' hex='#31F080' textColor='white' />
          <ColorBlock name='gray-700' hex='#31F080' textColor='white' />
          <ColorBlock name='gray-800' hex='#31F080' textColor='white' />
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