"use client"
import { Flex } from '@/components/style/Flex';
import React, { use, useEffect } from 'react'
import CommentInputSet from './CommentInputSet';
import CommentList from './CommentList';

export type ArticleCommentsProps = {
    promise : Promise<any>;
}

const ArticleComments = ({promise}: ArticleCommentsProps) => {
    const data = use(promise);
    useEffect(()=>{
       console.log(data); 
    },[]);
  return (
    <Flex.VStack className='w-[1200px] h-fit'>
      <CommentInputSet />
      <CommentList />
    </Flex.VStack>
  )
}

export default ArticleComments