'use client'
import { PostSchema } from '@/app/posts/create/page'
import store from '@/store/store'
import React from 'react'

const InputModule = ({ target }: { target: keyof Omit<PostSchema, "content"> }) => {
  const { title, setProperty } = store.useCreatePost();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProperty({
      [target]: e.currentTarget.value
    });
  }
  return (
    <input
      type='text'
      name={target}
      value={title}
      onChange={onChangeHandler}
      className={'border-cyan-500 text-slate-800 px-2'} />
  )
}

export default InputModule