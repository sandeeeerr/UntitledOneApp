'use client'

import EditorJS from '@editorjs/editorjs'
import AttachesTool from '@editorjs/attaches';

import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'
import { z } from 'zod'

import { toast } from '@/hooks/use-toast'
import { uploadFiles } from '@/lib/uploadthing'
import { ProjectCreationRequest, ProjectValidator } from '@/lib/validators/project'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import '@/styles/editor.scss'

type FormData = z.infer<typeof ProjectValidator>

interface EditorProps {
  communityId: string
}

export const Editor: React.FC<EditorProps> = ({ communityId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(ProjectValidator),
    defaultValues: {
      communityId,
      title: '',
      content: null,
    },
  })
  const ref = useRef<EditorJS>()
  const _titleRef = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const pathname = usePathname()

  const { mutate: createProject } = useMutation({
    mutationFn: async ({
      title,
      content,
      communityId,
    }: ProjectCreationRequest) => {
      const payload: ProjectCreationRequest = { title, content, communityId }
      const { data } = await axios.post('/api/community/project/create', payload)
      return data
    },
    onError: () => {
      return toast({
        title: 'Something went wrong.',
        description: 'Your project was not published. Please try again.',
        variant: 'destructive',
      })
    },
    onSuccess: () => {
      // turn pathname /r/mycommunity/submit into /r/mycommunity
      const newPathname = pathname.split('/').slice(0, -1).join('/')
      router.push(newPathname)

      router.refresh()

      return toast({
        description: 'Your project has been published.',
      })
    },
  })

  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import('@editorjs/editorjs')).default
    const Header = (await import('@editorjs/header')).default
    const AttachesTool = (await import('@editorjs/attaches')).default
    const Embed = (await import('@editorjs/embed')).default
    
    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editor',
        onReady() {
          ref.current = editor
        },
        placeholder: '',
        inlineToolbar: false,
        data: { blocks: [
          {
            type: 'paragraph',
            data: {
              text: 'Type here...'
            }
          },
          {
            type: 'attaches',
            data: {

            },
          },

        ] },
        tools: {
          header: Header,
          embed: Embed,
          attaches: {
            class: AttachesTool,
            config: {
              uploader: {
                async uploadByFile(file: File) {
                  // upload to uploadthing
                  const [res] = await uploadFiles([file], 'fileUploader')

                  return {
                    success: 1,
                    file: {
                      url: res.fileUrl,
                    },
                  }
                },
              },
            },
          }
        },
      })
    }
  }, [])

  useEffect(() => {
    if (Object.keys(errors).length) {
      for (const [_key, value] of Object.entries(errors)) {
        value
        toast({
          title: 'Something went wrong.',
          description: (value as { message: string }).message,
          variant: 'destructive',
        })
      }
    }
  }, [errors])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true)
    }
  }, [])

  useEffect(() => {
    const init = async () => {
      await initializeEditor()

      setTimeout(() => {
        _titleRef?.current?.focus()
      }, 0)
    }

    if (isMounted) {
      init()

      return () => {
        ref.current?.destroy()
        ref.current = undefined
      }
    }
  }, [isMounted, initializeEditor])

  async function onSubmit(data: FormData) {
    const blocks = await ref.current?.save()

    const payload: ProjectCreationRequest = {
      title: data.title,
      content: blocks,
      communityId,
    }

    createProject(payload)
  }

  if (!isMounted) {
    return null
  }

  const { ref: titleRef, ...rest } = register('title')

  return (
    <div className='w-full p-4 border rounded-lg bg-backgroundSecondary'>
      <form
        id='community-project-form'
        className='w-fit'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='prose prose-stone dark:prose-invert'>
          <TextareaAutosize
            ref={(e) => {
              titleRef(e)
              // @ts-ignore
              _titleRef.current = e
            }}
            {...rest}
            placeholder='Title'
            className='w-full overflow-hidden text-5xl font-bold bg-transparent appearance-none resize-none focus:outline-none'
          />
          <div id='editor' className='min-h-[500px]' />
        </div>
      </form>
    </div>
  )
}