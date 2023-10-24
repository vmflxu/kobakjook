import React from 'react'
import { Flex } from '../style/Flex'
import Image from 'next/image'
// import profile from '#/profile/JYP.png'

const Introduce = () => {
    return (
        <Flex.HStack className='w-full px-8 gap-4 mt-8 justify-between items-center'>
            <div className='aspect-square w-fit'>
                <div className={'w-[80px] h-[80px] bg-gray-300 rounded-full'}></div>
                {/* <Image
                    src={profile}
                    alt='profile'
                    width={80}
                    height={80}
                    className='rounded-full'
                /> */}
            </div>
            <Flex.VCenter className='text-normal flex-1 items-end'>
                <span>{"text1"}</span>
                <span>{"text2"}</span>
                {/* <span>{"코드에 머리박고 죽을때까지!"}</span> */}
                {/* <span>{"Frontend Developer"}</span> */}
            </Flex.VCenter>
        </Flex.HStack>
    )
}

export default Introduce