'use client'
import { Flex } from '@/components/style/Flex'
import React, { useEffect, useState } from 'react'
import WritterInfo from './WritterInfo'
import CommentArea from './CommentArea'
import useComment, { CommentInputSetState } from '@/hooks/useComment'

const CommentInputSet = () => {
    const { comments, setCommentValue} = useComment();
    useEffect(() => {
        console.log(comments);
    },[comments]);
    return (
        <Flex.HStack className='justify-between text-sm gap-4 h-24'>
            <WritterInfo comments={comments} setCommentValue={setCommentValue} />
            <CommentArea />
            <button onClick={() => { }} className='w-[100px] h-full border text-slate-700 hover:text-white hover:bg-slate-600'>작성완료</button>
        </Flex.HStack>
    )
}

export default CommentInputSet