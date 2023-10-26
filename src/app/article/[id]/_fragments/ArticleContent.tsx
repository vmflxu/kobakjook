import { Flex } from '@/components/style/Flex'
import { textColor } from '@/values/styles'
import React from 'react'

export type ArticleContentProps = {
    content: string,
    tags: string[],
}
const ArticleContent = ({ content, tags }: ArticleContentProps) => {
    return (
        <Flex.VStack className={`w-[1200px] min-h-full h-fit text-${textColor.normal}`}>
            <div className='w-full min-h-[300px] h-fit mt-12 text-black' dangerouslySetInnerHTML={{ __html: content }}></div>
            <Flex.HStack className='gap-4 mt-4 text-gray-400'>{tags.map(item => <span>{`#${item}`}</span>)}</Flex.HStack>
            <div className='w-full h-[1px] bg-slate-700 my-4'></div>
        </Flex.VStack>
    );
}

export default ArticleContent