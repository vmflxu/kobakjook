'use client'
import { Flex } from '@/components/style/Flex';
import store from '@/store/store'
import React, { useEffect } from 'react'

const TagListViewer = () => {
    const { tags, initState, deleteTag } = store.useCreatePost();

    useEffect(() => {
        return () => {
            initState();
        }
    }, []);

    return (
        <Flex.VStack className='gap-2'>
            Tags
            <Flex.HStack className='gap-2 flex-wrap mb-3'>
                {tags.map((item: string, idx: number) => {
                    return (
                        <Flex.HBetween
                            key={idx}
                            className='w-fit h-fit px-4 py-1 bg-white text-gray-500 rounded-full inline-flex text-sm font-semibold items-center'
                        >
                            {`${item}`}
                            <button
                                className='ml-2 px-0 hover:text-red-500 items-center text-lg'
                                onClick={e => deleteTag(item)}
                            >
                                ×
                            </button>
                        </Flex.HBetween>
                    )
                })}
            </Flex.HStack>
        </Flex.VStack>
    )
}

export default TagListViewer