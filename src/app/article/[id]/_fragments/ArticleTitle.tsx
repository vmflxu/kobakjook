import { Flex } from '@/components/style/Flex'
import React from 'react'

export type ArticleTitleProps = {
    title : string,
    date : number,
}
const ArticleTitle = ({ title, date }:ArticleTitleProps) => {
    // const writeAt = new Date(date).toISOString();
    const writeAt = new Date(date).toISOString().split('.')[0].split('T');

    return (
        <Flex.Center className='w-full h-[200px] bg-slate-700 text-white text-3xl'>
            <Flex.HBetween className='w-[1200px] h-fit'>
                <div>{title}</div>
                <Flex.VStack className='text-right'>
                <div className='text-sm font-light'>{writeAt[0].replaceAll('-','.')}</div>
                <div className='text-sm font-light'>{writeAt[1]}</div>
                </Flex.VStack>
            </Flex.HBetween>
        </Flex.Center>
    )
}

export default ArticleTitle