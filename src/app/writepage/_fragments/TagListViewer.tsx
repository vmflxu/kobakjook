'use client'
import store from '@/store/store'
import React from 'react'

const TagListViewer = () => {
    const { tags } = store.useCreatePost();

    // key uuid로 바꿔줄것
    return (
        <div>
            {tags.map((item, idx) => {
                return <span key={idx}>{`#${item}`}</span>
            })}
        </div>
    )
}

export default TagListViewer