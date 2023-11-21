'use client'

import { Flex } from '@/components/style/Flex';
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { ResPostSchema } from '@/app/writepage/page';

export type PostCardProps = {
    data: ResPostSchema
}
const PostCard = ({ data }: PostCardProps) => {
    const reg = /<[^>]*>?/g;
    const content = data?.content.replace(reg, '');
    const router = useRouter();
    const params = useSearchParams();
    const prefetchHandler = () => {
        router.prefetch(`/article/${data._id}`);
    }
    const changeRouteHandler = () => {
        router.push(`/article/${data._id}`);
    }
    return (
        <Flex.HStack
            className='w-full h-fit gap-4 px-4 cursor-pointer sm:flex-col sm:px-0 sm:w-fit'
            onClick={changeRouteHandler}
            onMouseEnter={prefetchHandler}
        >
            <Flex.Center className={'hidden sm:flex w-1/2 h-1/2 sm:w-[250px] sm:h-[250px] relative border border-gray-700 text-white z-10 bg-color-strong p-4 gap-6 before:w-[230px] before:h-[230px] before:bg-color-base before:absolute after:w-[210px] after:h-[210px] after:bg-color-week after:absolute'}>
                <div className={`w-[180px] line-clamp-2 font-semibold text-white z-20`}>{data.title}</div>
            </Flex.Center>
            <Flex.VStack className={'w-full sm:w-[250px] text-xs gap-2'}>
                <div className='sm:hidden font-bold text-lg'>{data.title}</div>
                <div className='w-full line-clamp-3 whitespace-pre-line'>{content}</div>
            </Flex.VStack>
        </Flex.HStack>
    )
}

export default PostCard