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
    const dateString = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate() < 10 ? 0 : ''}${time.getDate()}`;
    const actionHandler = async (formData: FormData) => {
        'use server'
        formData.append('id', item._id);
        formData.append('listId', listId);
        await deleteComment(formData);
    }
    return (
        <>
            <Flex.HBetween
                as='form'
                action={actionHandler}
                className='gap-4 items-center text-sm xl:justify-normal xl:items-baseline'
            >
                <div className='w-[150px] font-semibold text-gray-600'>{item.writter}</div>
                <div className='hidden flex-1 whitespace-pre-line w-0 h-0 xl:flex xl:w-full xl:h-fit'>{item.comment}</div>
                <Flex.HStack className='gap-4'>
                    <Flex.VStack>
                        <div className='w-[100px] text-xs text-right text-gray-500'>{dateString}</div>
                        <div className='w-[100px] text-xs text-right text-gray-500'>{new Date(item.writeAt).toLocaleTimeString()}</div>
                    </Flex.VStack>
                    <button className='w-fit h-fit rounded-md'>✕</button>
                </Flex.HStack>
            </Flex.HBetween>
            <div className='flex flex-1 text-xs whitespace-pre-line w-full h-fit xl:hidden'>{item.comment}</div>
        </>
    )
}

export default CommentDetail