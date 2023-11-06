import React from "react";
import Devider from "@element/Devider";
import { ShowcaseBlock } from "@element/ShowcaseBlock";

function Border() {
  return (
    <>
      <h4>Color & size</h4>
      <p className="mb-5 font-small text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <ShowcaseBlock>
        <Devider />
      </ShowcaseBlock>

      <pre className="border-2  bg-[#2a2a2b] rounded mt-3">
        <code className="markdown xml">
          {`<div className='border-2 '>...</div>`}
        </code>
      </pre>

      <Devider />

      <h4>Radius</h4>
      <p className="mb-5 font-small text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <ShowcaseBlock gridCols="3">
        <div className="items-center justify-center flex">
          <div className="h-20 w-20 bg-background border-2  rounded"></div>
        </div>
        <div className="items-center justify-center flex">
          <div className="h-20 w-20 bg-background border-2  rounded-xl"></div>
        </div>
        <div className="items-center justify-center flex">
          <div className="h-20 w-20 bg-background border-2  rounded-full"></div>
        </div>
      </ShowcaseBlock>

      <pre className="border-2  bg-[#2a2a2b] rounded mt-3">
        <code className="markdown xml">
          {`<div className='border-2 rounded'>...</div>
<div className='border-2 rounded-xl'>...</div>
<div className='border-2 rounded-full'>...</div>`}
        </code>
      </pre>
    </>
  );
}

export default Border;
