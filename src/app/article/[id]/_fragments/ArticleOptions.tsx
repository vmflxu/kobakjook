'use client'
import { Line } from '@/components/common/Line'
import { Flex } from '@/components/style/Flex'
import { useRouter } from 'next/navigation'
import React from 'react'

const ArticleOptions = () => {
    const router = useRouter();
    return (
        <Flex.VStack className='w-full lg:w-[1200px] gap-1 mt-4'>
            <Line.Helical color='gray' degree={400} />
            <Flex.HStack className='w-full justify-end gap-2'>
                <button onClick={e => router.back()} className='text-sm px-2 py-1 rounded-full text-color-more-strong hover:text-white hover:bg-color-strong'>뒤로가기</button>
            </Flex.HStack>
        </Flex.VStack>
    )
}

export default ArticleOptions