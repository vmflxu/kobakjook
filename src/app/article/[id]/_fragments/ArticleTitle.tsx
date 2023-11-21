import { Flex } from '@/components/style/Flex'
import React from 'react'

export type ArticleTitleProps = {
    title: string,
    date: number,
}
const ArticleTitle = ({ title, date }: ArticleTitleProps) => {
    // const writeAt = new Date(date).toISOString();
    const writeAt = new Date(date).toISOString().split('.')[0].split('T');

    return (
        <Flex.Center className='w-full h-[200px] bg-color-base text-color-normal text-3xl font-bold'>
            <Flex.HBetween className='w-full h-fit px-8 sm:px-8 xl:px-0 lg:max-w-[1200px]'>
                <div className='w-fit'>{title}</div>
                <Flex.VStack className='text-right w-fit'>
                    <div className='text-sm font-light'>{writeAt[0].replaceAll('-', '.')}</div>
                    <div className='text-sm font-light'>{writeAt[1]}</div>
                </Flex.VStack>
            </Flex.HBetween>
        </Flex.Center>
    )
}

export default ArticleTitle