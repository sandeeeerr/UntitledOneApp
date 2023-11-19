'use client'

import EditorJS from '@editorjs/editorjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'
import { z } from 'zod'

import { Label } from "@/components/elements/Label";
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
    // const Embed = (await import('@editorjs/embed')).default
    // const Table = (await import('@editorjs/table')).default
    const List = (await import('@editorjs/list')).default
    // const Code = (await import('@editorjs/code')).default
    const LinkTool = (await import('@editorjs/link')).default
    // const InlineCode = (await import('@editorjs/inline-code')).default
    // const ImageTool = (await import('@editorjs/image')).default

    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editor',
        onReady() {
          ref.current = editor
        },
        placeholder: 'Type here to write your project...',
        inlineToolbar: true,
        data: { blocks: [] },
        tools: {
          header: Header,
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: '/api/link',
            },
          },
          // image: {
          //   class: ImageTool,
          //   config: {
          //     uploader: {
          //       async uploadByFile(file: File) {
          //         // upload to uploadthing
          //         const [res] = await uploadFiles([file], 'imageUploader')

          //         return {
          //           success: 1,
          //           file: {
          //             url: res.fileUrl,
          //           },
          //         }
          //       },
          //     },
          //   },
          // },
          list: List,
          // code: Code,
          // inlineCode: InlineCode,
          // table: Table,
          // embed: Embed,
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
        // ref.current.destroy()
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
    <div className='w-full p-4 border rounded-lg bg-darkGrey'>
      <form
        id='community-project-form'
        className='w-fit'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='prose prose-stone'>
          <TextareaAutosize
            ref={(e) => {
              titleRef(e)
              // @ts-ignore
              _titleRef.current = e
            }}
            {...rest}
            placeholder='Title'
            className='w-full overflow-hidden text-5xl font-bold text-white bg-transparent appearance-none resize-none focus:outline-none'
          />
          <div id='editor' className='min-h-[100px]' />
        </div>
        <div className="flex items-center justify-center w-full">
          <Label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded cursor-pointer border-lightGrey bg-backgroundSecondary">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-lightGrey"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-lightGrey">
                Drag & drop or{" "}
                <span className="text-secondary">Choose file</span> to upload{" "}
              </p>
              <p className="text-xs text-lightGrey">
                FLAC, MP3, WAV or AAC (MAX. 100 MB)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </Label>
        </div>
      </form>
    </div>
  )
}