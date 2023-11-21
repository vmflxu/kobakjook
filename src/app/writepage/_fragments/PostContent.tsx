import { Flex } from '@/components/style/Flex'
import React from 'react'
import Editor from '@/components/editor/Editor'

const PostContent = ({ label }: { label: string }) => {
    return (
        <Flex.VStack className={'bg-color-strong p-4 text-white w-full gap-1 h-fit overflow-y-hidden'}>
            <label>{label}</label>
            <Editor placeholder='내용을 입력하세요.' />
            {/* <TextareaModule target={'content'} /> */}
        </Flex.VStack>
    )
}

export default PostContent