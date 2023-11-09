import { Flex } from '@/components/style/Flex';
import React, { use, useEffect } from 'react'
import CommentInputSet from './CommentInputSet';
import CommentList from './CommentList';

export type ArticleCommentsProps = {
  promise: Promise<any>;
}

const ArticleComments = ({id}:{id:string}) => {
  return (
    <Flex.VStack className='w-full h-fit px-8 xl:w-[1200px] xl:px-0'>
      <CommentInputSet id={id}/>
      <CommentList id={id}/>
    </Flex.VStack>
  )
}

export default ArticleComments