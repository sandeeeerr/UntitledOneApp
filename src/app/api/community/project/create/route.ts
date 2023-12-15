import { getAuthSession } from '@/lib/auth'
import { db } from '@/lib/db'
import { ProjectValidator } from '@/lib/validators/project'
import { z } from 'zod'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { title, content, communityId } = ProjectValidator.parse(body)

    const session = await getAuthSession()

    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 })
    }

    // verify user is subscribed to passed community id
    const subscription = await db.subscription.findFirst({
      where: {
        communityId,
        userId: session.user.id,
      },
    })

    if (!subscription) {
      return new Response('Subscribe to project', { status: 403 })
    }

    await db.project.create({
      data: {
        title,
        content,
        authorId: session.user.id,
        communityId,
        public: true,
      },
    })

    return new Response('OK')
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 })
    }

    return new Response(
      'Could not project to community at this time. Please try later',
      { status: 500 }
    )
  }
}