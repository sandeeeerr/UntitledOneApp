import React from 'react'
import ColorBlock from '@element/ColorBlock';
import Devider from '@element/Devider';
import {ShowcaseBlock} from '@element/ShowcaseBlock';
import Header from '@module/Header/Header';


function Layout() {
  return (
    <>
      <h4>Pages</h4>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <h6>Header & footer</h6>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ShowcaseBlock>
        <div className='flex space-x-3 mb-1'>  
          <div className='w-full bg-background border-2 pt-8 rounded'> </div>      
        </div>
        <div className='flex space-x-3 '>     
          <div className='w-1/4 bg-darkGrey border-2 pt-32 rounded'> </div>   
          <div className='w-3/4 bg-darkGrey border-2 pt-32 rounded '> </div>
        </div>
        <div className='flex space-x-3 mt-1'>  
          <div className='w-full bg-background border-2 pt-12 rounded'> </div>      
        </div>
      </ShowcaseBlock>

      <h6>Full width</h6>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ShowcaseBlock>
        <div className='flex space-x-3 '>      

          <div className='w-full bg-darkGrey border-2 pt-28 rounded '>
            
          </div>
        </div>
      </ShowcaseBlock>

      <h6>Sidebar left</h6>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ShowcaseBlock>
        <div className='flex space-x-3 '>      
          <div className='w-1/4 bg-darkGrey border-2 pt-28 rounded'>
            
          </div>  
          <div className='w-3/4 bg-background border-2 pt-28 rounded '>
            
          </div>
        </div>
      </ShowcaseBlock>

      <h6>Sidebar right</h6>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ShowcaseBlock>
        <div className='flex space-x-3 '>      
          <div className='w-3/4 bg-background border-2 pt-28 rounded '>
            
          </div>
          <div className='w-1/4 bg-backgroundOverlays border-2 pt-28 rounded'>
            
          </div>  
        </div>
      </ShowcaseBlock>


      <Devider />

      <h4>Margins & paddings</h4>

      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <h6>Placement</h6>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ShowcaseBlock>
      <div className="flex flex-wrap items-start justify-center font-mono text-white text-sm font-bold leading-6 overflow-hidden -px-10">
        <div className="flex items-start">
          <div className="flex-none px-5">
            <div className="bg-primary shadow-lg rounded-lg overflow-hidden">
              <div className="h-6 bg-secondary rounded-t-lg"></div>
              <div className="p-4">pt-6</div>
            </div>
          </div>
          <div className="flex-none px-5 pt-6">
            <div className="flex bg-primary shadow-lg rounded-lg overflow-hidden">
              <div className="flex-none p-4">pr-4</div>
              <div className="flex-none w-4 bg-secondary"></div>
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-none px-5 pt-6">
            <div className="bg-primary shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">pb-8</div>
              <div className="h-8 bg-secondary"></div>
            </div>
          </div>
          <div className="flex-none flex px-5 pt-6">
            <div className="flex bg-primary shadow-lg rounded-lg overflow-hidden">
              <div className="flex-none w-2 bg-secondary"></div>
              <div className="flex-none p-4">pl-2</div>
            </div>
          </div>
        </div>
      </div>
      </ShowcaseBlock>
      <pre className='border-2  bg-[#2a2a2b] rounded mt-3'>
        <code className="markdown xml">{
`<div className="pt-6">pt-6</div>
<div className="pr-4">pr-4</div>
<div className="pb-8">pb-8</div>
<div className="pl-2">pl-2</div>`
      }
        </code>
      </pre>   

      <h6>Sizes</h6>
      <p className='mb-5 font-small text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <table className="min-w-full text-left text-sm overflow-auto">
        <thead className="border-b font-medium text-white">
          <tr>
            <th scope="col" className="px-0 py-4">Name</th>
            <th scope="col" className="px-0 py-4">Size</th>
            <th scope="col" className="px-0 py-4">Pixels</th>
            <th scope="col" className="px-0 py-4"></th>
          </tr>
        </thead>
        <tbody className='text-gray-400'>
          <tr className="border-b-2 ">
            <td className="whitespace-nowrap px-0 py-4">1</td>
            <td className="whitespace-nowrap px-0 py-4">0.25rem</td>
            <td className="whitespace-nowrap px-0 py-4">0px</td>
            <td className="whitespace-nowrap px-0 py-4">
              <div className="h-4 w-0 pr-1 bg-secondary" ></div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="whitespace-nowrap px-0 py-4">2</td>
            <td className="whitespace-nowrap px-0 py-4">0.5rem</td>
            <td className="whitespace-nowrap px-0 py-4">1px</td>
            <td className="whitespace-nowrap px-0 py-4">
              <div className="h-4 w-0 pr-2 bg-secondary" ></div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="whitespace-nowrap px-0 py-4">4</td>
            <td className="whitespace-nowrap px-0 py-4">1rem</td>
            <td className="whitespace-nowrap px-0 py-4">2px</td>
            <td className="whitespace-nowrap px-0 py-4">
              <div className="h-4 w-0 pr-4 bg-secondary" ></div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="whitespace-nowrap px-0 py-4">5</td>
            <td className="whitespace-nowrap px-0 py-4">1rem</td>
            <td className="whitespace-nowrap px-0 py-4">2px</td>
            <td className="whitespace-nowrap px-0 py-4">
              <div className="h-4 w-0 pr-5 bg-secondary" ></div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="whitespace-nowrap px-0 py-4">8</td>
            <td className="whitespace-nowrap px-0 py-4">2rem</td>
            <td className="whitespace-nowrap px-0 py-4">2px</td>
            <td className="whitespace-nowrap px-0 py-4">
              <div className="h-4 w-0 pr-8 bg-secondary" ></div>
            </td>
          </tr>
          <tr className="border-b">
          <td className="whitespace-nowrap px-0 py-4">12</td>
            <td className="whitespace-nowrap px-0 py-4">3rem</td>
            <td className="whitespace-nowrap px-0 py-4">2px</td>
            <td className="whitespace-nowrap px-0 py-4">
              <div className="h-4 w-0 pr-12 bg-secondary" ></div>
            </td>          
          </tr>
          <tr className="border-b">
          <td className="whitespace-nowrap px-0 py-4">20</td>
            <td className="whitespace-nowrap px-0 py-4">0.125rem</td>
            <td className="whitespace-nowrap px-0 py-4">2px</td>
            <td className="whitespace-nowrap px-0 py-4">
              <div className="h-4 w-0 pr-20 bg-secondary" ></div>
            </td>          
          </tr>
          <tr className="">
          <td className="whitespace-nowrap px-0 py-4">32</td>
            <td className="whitespace-nowrap px-0 py-4">0.125rem</td>
            <td className="whitespace-nowrap px-0 py-4">2px</td>
            <td className="whitespace-nowrap px-0 py-4">
              <div className="h-4 w-0 pr-32 bg-secondary" ></div>
            </td>          
          </tr>

        </tbody>
      </table>

    </>
  )
}

export default Layout