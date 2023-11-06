'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'

const CommentButton = () => {
    const { pending } = useFormStatus();
    return (
        <button
            // disabled={pending}
            className='w-[100px] h-full border text-slate-700 hover:text-white hover:bg-slate-600'
        >
            {
                pending
                    ? '업로드 중..'
                    : '작성하기'
            }
        </button>
    )
}

export default CommentButton