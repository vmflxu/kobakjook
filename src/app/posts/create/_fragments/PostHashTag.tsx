import { Flex } from '@/components/style/Flex'
import InputModule from '@/components/style/InputModule'
import React from 'react'
import InputTagModule from './InputTagModule'
import TagListViewer from './TagListViewer'

const PostHashTag = () => {
    return (
        <Flex.VStack className={'bg-gray-600 p-4 text-white w-full gap-1'}>
            <TagListViewer />
            <InputTagModule />
        </Flex.VStack>
    )
}

export default PostHashTag