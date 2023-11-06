import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex pt-2 px-2 w-full rounded bg-transparent text-sm text-white placeholder:text-darkGrey disabled:cursor-not-allowed focus:border-b-primary border-2 border-solid border-transparent border-b-darkGrey focus:outline-none focus:ring-0 disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
