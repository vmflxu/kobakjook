import { Flex } from '@/components/style/Flex'
import { textColor } from '@/values/styles'
import React from 'react'

export type ArticleContentProps = {
    content: string,
    tags: string[],
}

const ArticleContent = ({ content, tags }: ArticleContentProps) => {
    return (
        <Flex.VStack className={`w-full max-w-[1200px] px-16 min-h-full h-fit text-${textColor.normal} lg:px-0`}>
            <div className='w-full min-h-[300px] h-fit mt-12 text-black' dangerouslySetInnerHTML={{ __html: content }}></div>
            <Flex.HStack className='gap-4 mt-4 text-gray-400'>
                {
                tags.map((item,idx) => <span key={`${item}+${idx}`}>{`#${item}`}</span>)
                }
                </Flex.HStack>
            <div className='w-full h-[1px] bg-slate-700 my-4'></div>
        </Flex.VStack>
    );
}

export default ArticleContent