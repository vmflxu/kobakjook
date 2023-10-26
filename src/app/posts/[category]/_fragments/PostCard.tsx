'use client'

import { Flex } from '@/components/style/Flex';
import React, { useEffect, useRef, useState } from 'react'
import { ResPostSchema } from '../../create/page';
import { useRouter, useSearchParams } from 'next/navigation';

export type PostCardProps = {
    data: ResPostSchema
}
const PostCard = ({data}: PostCardProps) => {
    const reg = /<[^>]*>?/g;
    const content = data?.content.replace(reg,'');
    const router = useRouter();
    const params = useSearchParams();
    const prefetchHandler = () => {
        router.prefetch(`/article/${data._id}`);
    }
    const changeRouteHandler = () => {
        router.push(`/article/${data._id}`);
    }
    return (
        <Flex.VStack 
        className='w-fit h-fit gap-4 cursor-pointer' 
        onClick={changeRouteHandler}
        onMouseEnter={prefetchHandler}
        >
            <Flex.Center className={'w-[250px] h-[250px] relative border border-gray-700 text-white z-10 bg-pink-200 p-4 gap-6 before:w-[230px] before:h-[230px] before:bg-white before:absolute after:w-[210px] after:h-[210px] after:bg-pink-200 after:absolute'}>
                <div className={`w-[180px] line-clamp-2 font-semibold text-slate-600 z-20`}>{data.title}</div>
            </Flex.Center>
            <div className={'w-[200px] text-xs line-clamp-3'}>{content}</div>
        </Flex.VStack>
    )
}

export default PostCard