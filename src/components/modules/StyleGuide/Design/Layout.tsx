import React from 'react'
import ColorBlock from '@element/ColorBlock';
import Devider from '@element/Devider';
import {ShowcaseBlock} from '@element/ShowcaseBlock';
import Header from '@module/Header/Header';


function Layout() {
  return (
    <>
      <h4>Pages</h4>
      <p className='mb-5 text-gray-400 font-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <h6>Header & footer</h6>
      <p className='mb-5 text-gray-400 font-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ShowcaseBlock>
        <div className='flex mb-1 space-x-3'>  
          <div className='w-full pt-8 border-2 rounded bg-background'> </div>      
        </div>
        <div className='flex space-x-3 '>     
          <div className='w-1/4 pt-32 border-2 rounded bg-darkGrey'> </div>   
          <div className='w-3/4 pt-32 border-2 rounded bg-darkGrey '> </div>
        </div>
        <div className='flex mt-1 space-x-3'>  
          <div className='w-full pt-12 border-2 rounded bg-background'> </div>      
        </div>
      </ShowcaseBlock>

      <h6>Full width</h6>
      <p className='mb-5 text-gray-400 font-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ShowcaseBlock>
        <div className='flex space-x-3 '>      

          <div className='w-full border-2 rounded bg-darkGrey pt-28 '>
            
          </div>
        </div>
      </ShowcaseBlock>

      <h6>Sidebar left</h6>
      <p className='mb-5 text-gray-400 font-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ShowcaseBlock>
        <div className='flex space-x-3 '>      
          <div className='w-1/4 border-2 rounded bg-darkGrey pt-28'>
            
          </div>  
          <div className='w-3/4 border-2 rounded bg-background pt-28 '>
            
          </div>
        </div>
      </ShowcaseBlock>

      <h6>Sidebar right</h6>
      <p className='mb-5 text-gray-400 font-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ShowcaseBlock>
        <div className='flex space-x-3 '>      
          <div className='w-3/4 border-2 rounded bg-background pt-28 '>
            
          </div>
          <div className='w-1/4 border-2 rounded bg-backgroundOverlays pt-28'>
            
          </div>  
        </div>
      </ShowcaseBlock>


      <Devider />

      <h4>Margins & paddings</h4>

      <p className='mb-5 text-gray-400 font-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <h6>Placement</h6>
      <p className='mb-5 text-gray-400 font-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ShowcaseBlock>
      <div className="flex flex-wrap items-start justify-center overflow-hidden font-mono text-sm font-bold leading-6 text-white -px-10">
        <div className="flex items-start">
          <div className="flex-none px-5">
            <div className="overflow-hidden rounded-lg shadow-lg bg-primary">
              <div className="h-6 rounded-t-lg bg-secondary"></div>
              <div className="p-4">pt-6</div>
            </div>
          </div>
          <div className="flex-none px-5 pt-6">
            <div className="flex overflow-hidden rounded-lg shadow-lg bg-primary">
              <div className="flex-none p-4">pr-4</div>
              <div className="flex-none w-4 bg-secondary"></div>
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-none px-5 pt-6">
            <div className="overflow-hidden rounded-lg shadow-lg bg-primary">
              <div className="p-4">pb-8</div>
              <div className="h-8 bg-secondary"></div>
            </div>
          </div>
          <div className="flex flex-none px-5 pt-6">
            <div className="flex overflow-hidden rounded-lg shadow-lg bg-primary">
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
      <p className='mb-5 text-gray-400 font-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <table className="max-w-6xl min-w-full px-4 mx-auto mt-16 overflow-auto text-sm text-left lg:mt-20">
        <thead className="font-medium text-white border-b">
          <tr>
            <th scope="col" className="px-0 py-2">Name</th>
            <th scope="col" className="px-0 py-2">Pixels</th>
            <th scope="col" className="px-0 py-2"></th>
          </tr>
        </thead>
        <tbody className='text-gray-400'>
          <tr className="border-b-2 ">
            <td className="px-0 py-2 whitespace-nowrap">1</td>
            <td className="px-0 py-2 whitespace-nowrap">4px</td>
            <td className="px-0 py-2 whitespace-nowrap">
              <div className="w-0 h-4 pr-1 bg-secondary" ></div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-0 py-2 whitespace-nowrap">2</td>
            <td className="px-0 py-2 whitespace-nowrap">8px</td>
            <td className="px-0 py-2 whitespace-nowrap">
              <div className="w-0 h-4 pr-2 bg-secondary" ></div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-0 py-2 whitespace-nowrap">3</td>
            <td className="px-0 py-2 whitespace-nowrap">12px</td>
            <td className="px-0 py-2 whitespace-nowrap">
              <div className="w-0 h-4 pr-3 bg-secondary" ></div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-0 py-2 whitespace-nowrap">4</td>
            <td className="px-0 py-2 whitespace-nowrap">16px</td>
            <td className="px-0 py-2 whitespace-nowrap">
              <div className="w-0 h-4 pr-4 bg-secondary" ></div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-0 py-2 whitespace-nowrap">6</td>
            <td className="px-0 py-2 whitespace-nowrap">24px</td>
            <td className="px-0 py-2 whitespace-nowrap">
              <div className="w-0 h-4 pr-6 bg-secondary" ></div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-0 py-2 whitespace-nowrap">8</td>
            <td className="px-0 py-2 whitespace-nowrap">32px</td>
            <td className="px-0 py-2 whitespace-nowrap">
              <div className="w-0 h-4 pr-8 bg-secondary" ></div>
            </td>
          </tr>
          <tr className="border-b">
          <td className="px-0 py-2 whitespace-nowrap">12</td>
            <td className="px-0 py-2 whitespace-nowrap">48px</td>
            <td className="px-0 py-2 whitespace-nowrap">
              <div className="w-0 h-4 pr-12 bg-secondary" ></div>
            </td>          
          </tr>
          <tr className="border-b">
          <td className="px-0 py-2 whitespace-nowrap">16</td>
            <td className="px-0 py-2 whitespace-nowrap">64px</td>
            <td className="px-0 py-2 whitespace-nowrap">
              <div className="w-0 h-4 pr-16 bg-secondary" ></div>
            </td>          
          </tr>
          <tr className="border-b">
          <td className="px-0 py-2 whitespace-nowrap">24</td>
            <td className="px-0 py-2 whitespace-nowrap">96px</td>
            <td className="px-0 py-2 whitespace-nowrap">
              <div className="w-0 h-4 pr-24 bg-secondary" ></div>
            </td>          
          </tr>
          <tr className="border-b">
          <td className="px-0 py-2 whitespace-nowrap">32</td>
            <td className="px-0 py-2 whitespace-nowrap">128px</td>
            <td className="px-0 py-2 whitespace-nowrap">
              <div className="w-0 h-4 pr-32 bg-secondary" ></div>
            </td>          
          </tr>
          <tr className="border-b">
          <td className="px-0 py-2 whitespace-nowrap">40</td>
            <td className="px-0 py-2 whitespace-nowrap">160px</td>
            <td className="px-0 py-2 whitespace-nowrap">
              <div className="w-0 h-4 pr-40 bg-secondary" ></div>
            </td>          
          </tr>
          <tr className="">
          <td className="px-0 py-2 whitespace-nowrap">48</td>
            <td className="px-0 py-2 whitespace-nowrap">192px</td>
            <td className="px-0 py-2 whitespace-nowrap">
              <div className="w-0 h-4 pr-48 bg-secondary" ></div>
            </td>          
          </tr>
        </tbody>
      </table>

    </>
  )
}

export default Layout