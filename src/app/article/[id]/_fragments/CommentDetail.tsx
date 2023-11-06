import { Flex } from '@/components/style/Flex'
import deleteComment from '@/lib/actions/deleteComment';
import { ResCommentSchemaType } from '@/models/comment'
import React from 'react'

const CommentDetail = ({
    item,
    listId,
}: {
    item: ResCommentSchemaType,
    listId: string,
}) => {
    const actionHandler = async (formData: FormData) => {
        'use server'
        formData.append('id', item._id);
        formData.append('listId', listId);
        await deleteComment(formData);
    }
    return (
        <Flex.HStack
            as='form'
            action={actionHandler}
            className='gap-4 items-baseline text-sm'
        >
            <div className='w-[150px]'>{item.writter}</div>
            <div className='flex flex-1 whitespace-pre-line'>{item.comment}</div>
            <div className='w-[100px] text-sm text-right text-gray-500'>{new Date(item.writeAt).toLocaleTimeString()}</div>
            <button className='w-fit h-fit rounded-md'>✕</button>
        </Flex.HStack>
    )
}

export default CommentDetail