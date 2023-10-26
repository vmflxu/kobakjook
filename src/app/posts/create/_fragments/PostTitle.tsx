import { Flex } from '@/components/style/Flex'
import InputModule from '@/components/style/InputModule'
import React from 'react'

const PostTitle = ({ label }: { label: string }) => {
    return (
        <Flex.VStack className={'bg-gray-600 p-4 text-white w-full gap-1'}>
            <label>{label}</label>
            <InputModule target={'title'} />
        </Flex.VStack>
    )
}

export default PostTitle