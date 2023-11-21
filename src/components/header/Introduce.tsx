import React from 'react'
import { Flex } from '../style/Flex'
import Image from 'next/image'
import profile from '#/profile/KBJ.jpg'

const Introduce = () => {
    return (
        <Flex.HStack className='w-full px-8 gap-4 mt-8 justify-between items-center z-50'>
            <div className='aspect-square w-fit h-fit'>
                <div className={'w-[80px] h-[80px] bg-gray-300 rounded-full overflow-hidden'}>
                    <Image
                        src={profile}
                        sizes='100%'
                        alt='profile'
                        objectFit='cover'
                    />
                </div>
            </div>
            <Flex.VCenter className='text-sm flex-1 items-end'>
                <span>{"코드에 머리박고 죽을 작정인"}</span>
                <span>{"프론트엔드 개발자 코박죽입니다."}</span>
            </Flex.VCenter>
        </Flex.HStack>
    )
}

export default Introduce