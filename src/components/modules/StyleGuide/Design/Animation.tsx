import React from 'react'
import ColorBlock from '@element/ColorBlock';
import Devider from '@element/Devider';
import {ShowcaseBlock} from '@element/ShowcaseBlock';

function Animation() {
  return (
    <>
      <h4>Timing</h4>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <ShowcaseBlock gridCols='3'>
        <div className='items-center justify-center flex'>
          <a href="#" className='duration-100 hover:scale-110 bg-secondary text-black  py-2 px-5 rounded '>Hover!</a>
        </div>
        <div className='items-center justify-center flex'>
          <a href="#" className='duration-200 hover:scale-110 bg-secondary text-black  py-2 px-5 rounded '>Hover!</a>
        </div>
        <div className='items-center justify-center flex'>
          <a href="#" className='duration-300 hover:scale-110 bg-secondary text-black  py-2 px-5 rounded '>Hover!</a>
        </div>
      </ShowcaseBlock>

      <pre className='border-2  bg-[#2a2a2b] rounded mt-3'>
        <code className="markdown xml">{
`<a className='duration-100 hover:scale-110'>Hover!</a>
<a className='duration-200 hover:scale-110'>Hover!</a>
<a className='duration-300 hover:scale-110'>Hover!</a>`
        }
        </code>
      </pre> 

    </>
  )
}

export default Animation