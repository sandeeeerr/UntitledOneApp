import { z } from "zod";

export const ProjectVoteValidator = z.object({
  projectId: z.string(),
  voteType: z.enum(["UP", "DOWN"]),
});

export type ProjectVoteRequest = z.infer<typeof ProjectVoteValidator>;

export const CommentVoteValidator = z.object({
  commentId: z.string(),
  voteType: z.enum(["UP", "DOWN"]),
});

export type CommentVoteRequest = z.infer<typeof CommentVoteValidator>;
