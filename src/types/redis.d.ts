import { Vote } from '@prisma/client'

export type CachedProject = {
  id: string
  title: string
  authorUsername: string
  content: string
  currentVote: Vote['type'] | null
  createdAt: Date
}