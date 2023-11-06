'use client'
import { PostSchema } from '@/app/writepage/page';
import store from '@/store/store'
import React from 'react'

const TextareaModule = ({ target }: { target: keyof Pick<PostSchema, 'content'> }) => {
  const { content, setProperty } = store.useCreatePost();
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProperty({
      [target]: e.currentTarget.value,
    })
  }
  return (
    <textarea
      value={content}
      onChange={onChangeHandler}
      name={target}
      className={'border-cyan-500 min-h-[300px] h-fit text-slate-800 px-2'}
    />
  )
}

export default TextareaModule