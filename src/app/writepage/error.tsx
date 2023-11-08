'use client'
import { Flex } from '@/components/style/Flex'
import React from 'react'

const error = () => {
    return (
        <Flex.Center className='w-full h-screen text-black text-3xl'>
            에러가 발생했습니다. 잠시 후 다시 시도해주세요.
        </Flex.Center>
    )
}

export default error