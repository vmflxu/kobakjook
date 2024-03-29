"use client"
import { Flex } from '@/components/style/Flex'
import React from 'react'

const WritterInfo = () => {
    return (
        <Flex.VStack className='gap-2 w-[100px]'>
            <Flex.VStack className='w-full'>
                <label>작성자</label>
                <input
                    type='text'
                    aria-label='작성자'
                    name='writter'
                    className='w-full border'
                    required
                />
            </Flex.VStack>
            <Flex.VStack className='w-full'>
                <label>비밀번호</label>
                <input
                    type='password'
                    aria-label='비밀번호'
                    name='password'
                    className='w-full border'
                    required
                />
            </Flex.VStack>
        </Flex.VStack>
    )
}

export default WritterInfo