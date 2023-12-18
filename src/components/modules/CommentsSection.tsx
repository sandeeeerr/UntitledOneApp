// import { getAuthSession } from '@/lib/auth'
// import { db } from '@/lib/db'
// import { Comment, CommentVote, User } from '@prisma/client'
// import CreateComment from './CreateComment'
// import ProjectComment from './comments/ProjectComment'

// type ExtendedComment = Comment & {
//   votes: CommentVote[]
//   author: User
//   replies: ReplyComment[]
// }

// type ReplyComment = Comment & {
//   votes: CommentVote[]
//   author: User
// }

// interface CommentsSectionProps {
//   projectId: string
//   comments: ExtendedComment[]
// }

// const CommentsSection = async ({ projectId }: CommentsSectionProps) => {
//   const session = await getAuthSession()

//   const comments = await db.comment.findMany({
//     where: {
//       projectId: projectId,
//       replyToId: null, // only fetch top-level comments
//     },
//     include: {
//       author: true,
//       votes: true,
//       replies: {
//         // first level replies
//         include: {
//           author: true,
//           votes: true,
//         },
//       },
//     },
//   })

//   return (
//     <div className='flex flex-col mt-4 gap-y-4'>
//       <hr className='w-full h-px my-6' />

//       <CreateComment projectId={projectId} />

//       <div className='flex flex-col mt-4 gap-y-6'>
//         {comments
//           .filter((comment) => !comment.replyToId)
//           .map((topLevelComment) => {
//             const topLevelCommentVotesAmt = topLevelComment.votes.reduce(
//               (acc, vote) => {
//                 if (vote.type === 'UP') return acc + 1
//                 if (vote.type === 'DOWN') return acc - 1
//                 return acc
//               },
//               0
//             )

//             const topLevelCommentVote = topLevelComment.votes.find(
//               (vote) => vote.userId === session?.user.id
//             )

//             return (
//               <div key={topLevelComment.id} className='flex flex-col'>
//                 <div className='mb-2'>
//                   <ProjectComment
//                     comment={topLevelComment}
//                     currentVote={topLevelCommentVote}
//                     votesAmt={topLevelCommentVotesAmt}
//                     projectId={projectId}
//                   />
//                 </div>

//                 {/* Render replies */}
//                 {topLevelComment.replies
//                   .sort((a, b) => b.votes.length - a.votes.length) // Sort replies by most liked
//                   .map((reply) => {
//                     const replyVotesAmt = reply.votes.reduce((acc, vote) => {
//                       if (vote.type === 'UP') return acc + 1
//                       if (vote.type === 'DOWN') return acc - 1
//                       return acc
//                     }, 0)

//                     const replyVote = reply.votes.find(
//                       (vote) => vote.userId === session?.user.id
//                     )

//                     return (
//                       <div
//                         key={reply.id}
//                         className='py-2 pl-4 ml-2 border-l-2 border-zinc-200'>
//                         <ProjectComment
//                           comment={reply}
//                           currentVote={replyVote}
//                           votesAmt={replyVotesAmt}
//                           projectId={projectId}
//                         />
//                       </div>
//                     )
//                   })}
//               </div>
//             )
//           })}
//       </div>
//     </div>
//   )
// }

// export default CommentsSection