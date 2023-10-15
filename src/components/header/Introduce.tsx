import React from 'react'
import { Flex } from '../style/Flex'
import Image from 'next/image'
import profile from '#/profile/JYP.png'

const Introduce = () => {
    return (
        <Flex.HStack className='w-full px-8 gap-4 mt-8 justify-between items-center'>
            <div className='aspect-square w-fit'>
                <Image
                    src={profile}
                    alt='profile'
                    width={80}
                    height={80}
                    className='rounded-full'
                />
            </div>
            <Flex.VCenter className='text-normal flex-1 items-end'>
                <span>{"코드에 머리박고 죽을때까지!"}</span>
                <span>{"Frontend Developer"}</span>
            </Flex.VCenter>
        </Flex.HStack>
    )
}

export default Introduce