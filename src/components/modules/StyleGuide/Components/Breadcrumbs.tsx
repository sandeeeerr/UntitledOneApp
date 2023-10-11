import React from 'react'

import {ShowcaseBlock} from '@element/ShowcaseBlock';

import Devider from '@/components/elements/Devider';
import Breadcrumb from '@/components/elements/Breadcrumb';

function BreadcrumbsStyleguide() {
  return (
    <>
      <h4>Nav</h4>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ShowcaseBlock>
        <Breadcrumb
          separator={<span className='text-lightGrey'> &gt; </span>}
          activeClasses='text-secondary'
          containerClasses='flex text-secondary' 
          listClasses='hover:underline mx-2'
          capitalizeLinks
        />
      </ShowcaseBlock>

      <pre className='border-2  bg-[#2a2a2b] rounded mt-3'>
        <code className="markdown xml">{
`<Breadcrumb />`
        }
        </code>
      </pre> 

    </>
  )
}

export default BreadcrumbsStyleguide