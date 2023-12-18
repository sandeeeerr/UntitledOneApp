"use client";

import { useCustomToasts } from "@/hooks/use-custom-toasts";
import { ProjectVoteRequest } from "@/lib/validators/vote";
import { usePrevious } from "@mantine/hooks";
import { VoteType } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/elements/Button";

interface ProjectVoteClientProps {
  initialVotesAmt: number;
}

const ProjectVoteCount = ({
  initialVotesAmt,
}: ProjectVoteClientProps) => {

  const [votesAmt, setVotesAmt] = useState<number>(initialVotesAmt);

  return (
  
      <p className="flex items-center gap-2 text-gray-300 w-fit">
        { votesAmt < 0 && <ArrowBigDown className="w-4 h-4 text-red-500 fill-red-500" /> }
        { votesAmt > 0 && <ArrowBigUp className="w-4 h-4 text-emerald-500 fill-emerald-500" /> }
        { votesAmt == 0 && <ArrowBigUp className="w-4 h-4 text-gray-300 fill-gray-300" /> }

        {votesAmt} votes
      </p>
  
  );
};

export default ProjectVoteCount;
