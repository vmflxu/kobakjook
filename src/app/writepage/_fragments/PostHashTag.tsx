import { Flex } from '@/components/style/Flex'
import React from 'react'
import TagListViewer from './TagListViewer'
import InputTagModule from './InputTagModule'

const PostHashTag = () => {
    return (
        <Flex.VStack className={'bg-color-strong p-4 text-white w-full gap-1'}>
            <TagListViewer />
            <InputTagModule />
        </Flex.VStack>
    )
}

export default PostHashTag