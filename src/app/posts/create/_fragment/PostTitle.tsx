import { Flex } from '@/components/style/Flex'
import React from 'react'

const PostTitle = ({ label }: { label: string }) => {
    return (
        <Flex.VStack className={'bg-gray-600 p-4 text-white w-full gap-1'}>
            <label>{label}</label>
            <input type='text' name='title' className={'border-cyan-500 text-slate-800 px-2'} />
        </Flex.VStack>
    )
}

export default PostTitle