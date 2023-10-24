import { Flex } from '@/components/style/Flex'
import TextareaModule from '@/components/style/TextareaModule'
import React from 'react'

const PostContent = ({ label }: { label: string }) => {
    return (
        <Flex.VStack className={'bg-gray-600 p-4 text-white w-full gap-1'}>
            <label>{label}</label>
            <TextareaModule target={'content'} />
        </Flex.VStack>
    )
}

export default PostContent