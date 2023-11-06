import React from "react";

import { ShowcaseBlock } from "@element/ShowcaseBlock";
import { Button } from "@element/Button";
import Devider from "@/components/elements/Devider";
import { Input } from "@/components/elements/Input";
import { Label } from "@/components/elements/Label";
import { Textarea } from "@/components/elements/Textarea";

function FormsStyleguide() {
  return (
    <>
      <h4>Basic input types</h4>
      <p className="mb-5 font-small text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <ShowcaseBlock className="bg-background">
        <Label className="mb-2">Default input</Label>
        <Input placeholder="Username" className="mb-5" />

        <Label className="mb-2">Password input</Label>
        <Input type="password" placeholder="Password" className="mb-5" />

        <Label className="mb-2">Email input</Label>
        <Input type="email" placeholder="Email" className="mb-5" />

        <Label className="mb-2">Date input</Label>
        <Input type="date" className="mb-5" />

        <Label className="mb-2">Textarea</Label>
        <Textarea id="comment" rows={1} placeholder="What are your thoughts?" />
      </ShowcaseBlock>

      <pre className="border-2  bg-[#2a2a2b] rounded mt-3">
        <code className="markdown xml">
          {`<Input placeholder='Username'/>
<Input type='password' placeholder='Password'/>
<Input type='email' placeholder='Email'/>
<Input type='date'/>
<Textarea rows={1} placeholder='What are your thoughts?' />`}
        </code>
      </pre>

      <Devider />

      <h4>Advanced input types</h4>
      <p className="mb-5 font-small text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <ShowcaseBlock className="bg-background">
        <div className="flex items-center justify-center w-full">
          <Label className="flex flex-col items-center justify-center w-full h-32 border-2 border-lightGrey border-dashed rounded cursor-pointer bg-backgroundSecondary">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-lightGrey"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-lightGrey">
                Drag & drop or{" "}
                <span className="text-secondary">Choose file</span> to upload{" "}
              </p>
              <p className="text-xs text-lightGrey">
                FLAC, MP3, WAV or AAC (MAX. 100 MB)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </Label>
        </div>
      </ShowcaseBlock>

      <pre className="border-2  bg-[#2a2a2b] rounded mt-3">
        <code className="markdown xml">{`<Input type='file'/>`}</code>
      </pre>

      <Devider />

      <h4>Input variants</h4>
      <p className="mb-5 font-small text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <ShowcaseBlock className="bg-background">
        <Label htmlFor="name" className="mb-2">
          Default input
        </Label>
        <Input id="name" placeholder="Add a title" className="mb-5" />
        <Label htmlFor="name" className="mb-2">
          Focus
        </Label>
        <Input
          id="name"
          placeholder="Add a title"
          className="mb-5 border-primary"
        />
        <Label htmlFor="name" className="mb-2">
          Warning
        </Label>
        <Input
          id="name"
          placeholder="Add a title"
          className=" border-danger placeholder-danger"
        />
      </ShowcaseBlock>
    </>
  );
}

export default FormsStyleguide;
