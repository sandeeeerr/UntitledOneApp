import * as React from "react";

import { cn } from "@/lib/utils";

export interface ShowcaseBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  gridCols?: string;
}

const ShowcaseBlock = React.forwardRef<HTMLDivElement, ShowcaseBlockProps>(
  ({ className, children, gridCols, ...props }, ref) => {
    return (
      <div
        className={cn(
          `gap-x-8 gap-y-2 border-2 border-b-2 my-4  bg-[#2a2a2b] rounded px-4 py-5 ${
            gridCols ? `grid items-start lg:grid-cols-${gridCols} ` : " "
          }`,
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
ShowcaseBlock.displayName = "ShowcaseBlock";

export { ShowcaseBlock };
