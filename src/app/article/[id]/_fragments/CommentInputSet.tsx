import { Flex } from '@/components/style/Flex'
import React, { useRef } from 'react'
import WritterInfo from './WritterInfo'
import CommentArea from './CommentArea'
import useComment, { CommentInputSetState } from '@/hooks/useComment'
import { actions } from '@/lib/actions/actions'
import createComment from '@/lib/actions/createComment'
import { revalidatePath } from 'next/cache'

const CommentInputSet = ({ id }: { id: string }) => {
    
    // const { comments, setCommentValue } = useComment();
    const actionHandler = async (formdata: FormData) => {
        'use server'
        formdata.append('targetId', id);
        console.log('들어가기전 formdata:', formdata);
        await createComment(formdata);
        revalidatePath(`/article/${id}`);
    }
    return (
        <Flex.HStack
            as='form'
            action={actionHandler}
            className='justify-between text-sm gap-4 h-24'
        >
            <WritterInfo />
            <CommentArea />
            <button className='w-[100px] h-full border text-slate-700 hover:text-white hover:bg-slate-600'>작성완료</button>
            {/* <WritterInfo comments={comments} setCommentValue={setCommentValue} /> */}
            {/* <CommentArea comments={comments} setCommentValue={setCommentValue} /> */}

        </Flex.HStack>
    )
}

export default CommentInputSet