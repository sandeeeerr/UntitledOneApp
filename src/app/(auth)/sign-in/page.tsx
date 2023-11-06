import { buttonVariants } from "@element/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import SignIn from "@/components/modules/Signin";

const page: FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="flex flex-col items-center justify-center h-full max-w-2xl gap-20 mx-auto">
        <SignIn />
      </div>
    </div>
  );
};

export default page;
