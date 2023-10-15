import { Flex } from '@/components/style/Flex'
import React from 'react'

const PostContent = ({ label }: { label: string }) => {
    return (
        <Flex.VStack className={'bg-gray-600 p-4 text-white w-full gap-1'}>
            <label>{label}</label>
            <textarea name='content' className={'border-cyan-500 min-h-[300px] h-fit text-slate-800 px-2'} />
        </Flex.VStack>
    )
}

export default PostContent