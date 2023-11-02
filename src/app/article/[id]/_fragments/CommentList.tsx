import { Flex } from '@/components/style/Flex';
import { getHost } from '@/lib/getHost';
import { ResCommentSchemaType } from '@/models/comment';
import React from 'react'

const CommentList = async ({ id }: { id: string }) => {
  const res = await fetch(`${getHost()}/api/comment?id=${id}`);
  const result = await res.json();
  const data = result.data as ResCommentSchemaType[];

  console.log('********************');
  console.log('data:', result.data);
  console.log('********************');
  return (
    <Flex.VStack className='mt-8 gap-4'>
      {data.map(item => {
        return (
        <Flex.HStack className='gap-4 items-baseline'>
          <div className='w-[150px] bg-green-400'>{item.writter}</div>
          <div className='flex flex-1 bg-pink-500 whitespace-pre-line'>{item.comment}</div>
          <div className='w-[100px] text-sm bg-blue-300 text-right'>{new Date(item.writeAt).toLocaleTimeString()}</div>
          <button className='w-fit h-fit rounded-md bg-red-300'>✕</button>
        </Flex.HStack>
        )
      })}
    </Flex.VStack>
  )
}

export default CommentList