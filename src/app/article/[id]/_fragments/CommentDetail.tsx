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

    const time = new Date(item.writeAt);
    const writted = {
        year: time.getFullYear(),
        month: time.getMonth(),
        date: time.getDate(),
    }
    const dateString = `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()< 10 ? 0 : null}${time.getDate()}`;
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
            <Flex.VStack>
            <div className='w-[100px] text-xs text-right text-gray-500'>{dateString}</div>
            <div className='w-[100px] text-xs text-right text-gray-500'>{new Date(item.writeAt).toLocaleTimeString()}</div>
            </Flex.VStack>
            
            <button className='w-fit h-fit rounded-md'>✕</button>
        </Flex.HStack>
    )
}

export default CommentDetail