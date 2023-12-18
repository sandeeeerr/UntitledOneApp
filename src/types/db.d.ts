import type { Project, Community, User, Vote, Comment } from '@prisma/client'

export type ExtendedProject = Project & {
  community: Community
  votes: Vote[]
  author: User
  comments: Comment[]
}