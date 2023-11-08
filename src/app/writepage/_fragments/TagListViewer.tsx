'use client'
import { Flex } from '@/components/style/Flex';
import store from '@/store/store'
import React from 'react'

const TagListViewer = () => {
    const { tags } = store.useCreatePost();

    // key uuid로 바꿔줄것
    return (
        <Flex.HStack className='gap-2 flex-wrap mb-3'>
            {tags.map((item: string, idx: number) => {
                return (
                    <Flex.Center
                        key={idx}
                        className='w-fit h-fit px-3 py-1 bg-gray-500 text-white rounded-full inline-flex'
                    >
                        {`#${item}`}
                    </Flex.Center>
                )
            })}
        </Flex.HStack>
    )
}

export default TagListViewer