import React from "react";

type Props = { 
  children: React.ReactNode; 
  gridCols?: string;
};

const ShowcaseBlock = ({ children, gridCols }: Props) => (
  <>
    <div className={`gap-x-8 gap-y-2 border-2 border-b-2 my-4  bg-[#2a2a2b] rounded px-4 py-5 ${gridCols ? `grid items-start lg:grid-cols-${gridCols} ` : ' ' }`}>
      {children}
    </div> 
  </>
);

export default ShowcaseBlock;