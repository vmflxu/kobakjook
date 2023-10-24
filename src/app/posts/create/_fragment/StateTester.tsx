'use client'

import store from '@/store/store'
import React from 'react'

const StateTester = () => {
    const { title, content, path, setProperty } = store.useCreatePost();
    const onClickHandler = () => {
        setProperty({
            title: '제목제목',
            content:'내용내용',
            path: '패스패스'
        })
    }
  return (
    <div>
        <div>제목:{title}</div>
        <div>내용:{content}</div>
        <div>패스:{path}</div>
        <button onClick={onClickHandler}>버튼</button>
    </div>
  )
}

export default StateTester