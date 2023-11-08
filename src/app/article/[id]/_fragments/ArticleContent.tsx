import { Flex } from '@/components/style/Flex'
import { textColor } from '@/values/styles'
import React from 'react'

export type ArticleContentProps = {
    content: string,
    tags: string[],
}

const ArticleContent = ({ content, tags }: ArticleContentProps) => {
    return (
        <Flex.VStack className={`w-full max-w-[1200px] px-8 min-h-full h-fit text-${textColor.normal} xl:px-0`}>
            <div className='w-full min-h-[300px] h-fit mt-12 text-black' dangerouslySetInnerHTML={{ __html: content }}></div>
            <div className='w-full h-[1px] my-4 bg-gray-400'></div>
            <div className='text-normal text-gray-600'>Tags</div>
            <Flex.HStack className='gap-4 my-4 text-gray-400 flex-wrap'>
                {
                    tags.map((item, idx) => {
                        return (
                            <Flex.Center
                                key={`${item}+${idx}`}
                                className='w-fit h-fit px-3 py-1 bg-gray-500 text-white rounded-full inline-flex'
                            >
                                {`${item}`}
                            </Flex.Center>
                        );
                    })
                }
            </Flex.HStack>
            <div className='w-full h-[1px] bg-slate-700 my-4'></div>
        </Flex.VStack>
    );
}

export default ArticleContent