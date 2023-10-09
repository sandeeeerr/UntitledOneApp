import React from 'react'
import ColorBlock from '@element/ColorBlock';
import Devider from '@element/Devider';
import ShowcaseBlock from '@element/ShowcaseBlock';

function Typography() {
  return (
    <>
      <h4>headers</h4>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ShowcaseBlock>
        <div className={` w-full text-left rounded-lg`}>
          <p className='text-gray-600'>Page-headers <span className="float-right font-normal text-gray-500">Black 64px 72 Line height #31a0f0</span></p>
          <h1>INTER H1</h1>
          <p className='text-gray-600'>Untitled One Logo <span className="float-right font-normal text-gray-500">Black 64px 72 Line height #31a0f0</span></p>
          <h2>Inter H2</h2>
          <p className='text-gray-600'>Sub-headers <span className="float-right font-normal text-gray-500">Black 64px 72 Line height #31a0f0</span></p>
          <h3>Inter H3</h3>
          <p className='text-gray-600'>Navigation Items <span className="float-right font-normal text-gray-500">Black 64px 72 Line height #31a0f0</span></p>
          <h4>Inter H4</h4>
          <p className='text-gray-600'>Sidebar headers <span className="float-right font-normal text-gray-500">Black 64px 72 Line height #31a0f0</span></p>
          <h5>Inter H5</h5>
        </div>
      </ShowcaseBlock>

      <pre className='border-2  bg-[#2a2a2b] rounded mt-3'>
        <code className="markdown xml">{
`<h1>INTER H1</h1>
<h2>Inter H2</h2>
<h3>Inter H3</h3>
<h4>Inter H4</h4>
<h5>Inter H5</h5>`
      }
        </code>
      </pre>      

      <Devider /> 

      <h4>Font weight</h4>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <ShowcaseBlock>
        <p>Lorem ipsum dolor sit amet </p>
        <p className="font-bold">Lorem ipsum dolor sit amet </p>
      </ShowcaseBlock>
      <pre className='border-2  bg-[#2a2a2b] rounded mt-3'>
        <code className="markdown xml">{
`<p className="font-bold">Lorem ipsum dolor sit amet</p>`
      }
        </code>
      </pre>   

      <Devider /> 

      <h4>Alignment classes</h4>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <ShowcaseBlock gridCols='3'>
        <p className='text-left'>Left aligned text</p>
        <p className='text-center'>Left aligned text</p>
        <p className='text-right'>Left aligned text</p>
      </ShowcaseBlock>
      <pre className='border-2  bg-[#2a2a2b] rounded mt-3'>
        <code className="markdown xml">{
`<p className='text-left'>Left aligned text</p>
<p className='text-center'>Left aligned text</p>
<p className='text-right'>Left aligned text</p>`
      }
        </code>
      </pre>   

      <Devider /> 

      <h4>Text Colors</h4>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ShowcaseBlock>
        <p className='text-white'>Normal text</p>
        <p className='text-gray-400'>lighter text</p>
        <p className='text-gray-500'>lighter text</p>
      </ShowcaseBlock>
      <pre className='border-2  bg-[#2a2a2b] rounded mt-3'>
        <code className="markdown xml">{
`<p className='text-white'>Normal text</p>
<p className='text-gray-400'>lighter text</p>
<p className='text-gray-500'>lighter text</p>`
      }
        </code>
      </pre> 


    </>
  )
}

export default Typography