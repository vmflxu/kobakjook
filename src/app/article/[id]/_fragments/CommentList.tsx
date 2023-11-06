import { Flex } from '@/components/style/Flex';
import { getHost } from '@/lib/getHost';
import { ResCommentSchemaType } from '@/models/comment';
import React, { Fragment } from 'react'
import CommentDetail from './CommentDetail';

const CommentList = async ({ id }: { id: string }) => {
  const res = await fetch(`${getHost()}/api/comment?id=${id}`);
  const result = await res.json();
  const data = [...result.data as ResCommentSchemaType[]];
  data.sort((a,b) => b.writeAt - a.writeAt);

  console.log('data:',data);
  return (
    <Flex.VStack className='mt-8 gap-4'>
      {
        data.map((item,idx) => {
          return (
            <Fragment key={item._id}>
              <CommentDetail item={item} key={item._id} listId={id} />
              {idx !== data.length-1 && <div className='w-full h-[1px] bg-gray-300'></div>}
            </Fragment>
          );
        })
      }
    </Flex.VStack>
  )
}

export default CommentList