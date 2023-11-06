import React from "react";

import { ShowcaseBlock } from "@element/ShowcaseBlock";
import { Button } from "@element/Button";
import Devider from "@/components/elements/Devider";

function ButtonsStyleguide() {
  return (
    <>
      <h4>Variants</h4>
      <p className="mb-5 font-small text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <ShowcaseBlock gridCols="5">
        <div className="items-center justify-center flex">
          <Button variant="default" size="default">
            Button
          </Button>
        </div>
        <div className="items-center justify-center flex">
          <Button variant="secondary" size="default">
            Button
          </Button>
        </div>
        <div className="items-center justify-center flex">
          <Button variant="disabled" size="default">
            Button
          </Button>
        </div>
        <div className="items-center justify-center flex">
          <Button variant="ghost" size="default">
            Button
          </Button>
        </div>
        <div className="items-center justify-center flex">
          <Button variant="link" size="default">
            Button
          </Button>
        </div>
      </ShowcaseBlock>

      <pre className="border-2  bg-[#2a2a2b] rounded mt-3">
        <code className="markdown xml">
          {`<Button>default</Button>
<Button variant='secondary'>secondary</Button>
<Button variant='disabled'>disabled</Button>
<Button variant='ghost'>ghost</Button>
<Button variant='link'>link</Button>`}
        </code>
      </pre>

      <Devider />

      <h4>Sizes</h4>
      <p className="mb-5 font-small text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <ShowcaseBlock gridCols="4">
        <div className="items-center justify-center flex">
          <Button variant="default" size="lg">
            large
          </Button>
        </div>
        <div className="items-center justify-center flex">
          <Button variant="default" size="default">
            default
          </Button>
        </div>
        <div className="items-center justify-center flex">
          <Button variant="default" size="sm">
            small
          </Button>
        </div>
        <div className="items-center justify-center flex">
          <Button variant="default" size="default" className="w-full">
            default full width
          </Button>
        </div>
      </ShowcaseBlock>

      <pre className="border-2  bg-[#2a2a2b] rounded mt-3">
        <code className="markdown xml">
          {`<Button size='lg'>secondary</Button>
<Button>default</Button>
<Button size='sm'>disabled</Button>
<Button className='w-full'>ghost</Button>`}
        </code>
      </pre>
    </>
  );
}

export default ButtonsStyleguide;
