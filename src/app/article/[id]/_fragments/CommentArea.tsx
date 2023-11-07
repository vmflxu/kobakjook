'use client'
import { CommentInputSetState } from '@/hooks/useComment'
import React, { useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom';

const CommentArea = () => {
    const cmtRef = useRef<HTMLTextAreaElement>(null);
    const { pending } = useFormStatus();

    useEffect(()=>{
        if(!pending){
            if(!!cmtRef.current){
                cmtRef.current.value = '';
            }
        }
    },[pending]);
    
    return (
        <textarea
            ref={cmtRef}
            placeholder='댓글을 입력해주세요.'
            className='w-full flex-1 h-full border pb-0 xl:pb-4 resize-none'
            name='comment'
            maxLength={300}
            wrap='hard'
            required
        />
    )
}

export default CommentArea