import React from 'react'

import ShowcaseBlock from '@element/ShowcaseBlock';
import {Button} from "@element/Button";

function ButtonsStyleguide() {
  return (
    <>
      <h4>Buttons</h4>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <ShowcaseBlock gridCols='3'>
        <div className='items-center justify-center flex'>
          <Button
            >
            Signup
          </Button>        
        </div>
        <div className='items-center justify-center flex'>
          <Button
            >
            Signup
          </Button>  
        </div>      
        <div className='items-center justify-center flex'>
          <Button
            >
            Signup
          </Button>          
        </div>
      </ShowcaseBlock>

      <pre className='border-2  bg-[#2a2a2b] rounded mt-3'>
        <code className="markdown xml">{
``
        }
        </code>
      </pre> 

    </>
  )
}

export default ButtonsStyleguide