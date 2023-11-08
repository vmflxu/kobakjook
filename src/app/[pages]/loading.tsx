'use client'
import { Flex } from '@/components/style/Flex'
import React from 'react'

const loading = () => {
  return (
    <Flex.Center className='w-full h-screen text-black text-3xl'>
        데이터를 가져오는 중입니다.
    </Flex.Center>
  )
}

export default loading