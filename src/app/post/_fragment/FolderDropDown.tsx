"use client"

import { MenuBody } from '@/components/header/HomeNav'
import { Flex } from '@/components/style/Flex'
import { RouteInform } from '@/values/routes'
import React, { useState } from 'react'

const FolderDropDown = ({ data }: { data: MenuBody }) => {
    const [turn, setTurn] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('');

    const toggleHandler = () => {
        setTurn(prev => !prev);
    }

    const onClickFolderHandler = (text: string) => {
        setSelected(text);
        toggleHandler();
    }

    return (
        <Flex.VStack className={'gap-0 w-full'}>
            <Flex.HBetween
                onClick={toggleHandler}
                className={'bg-gray-600 p-4 text-white w-full cursor-pointer'}
            >
                <div className={'h-fit'}>폴더</div>
                <div className={'font-extralight'}>{selected ?? ''}</div>
            </Flex.HBetween>
            {turn && <div className={'bg-gray-600 h-fit text-white w-full p-4'}>
                {data.subMenu.map(item => {
                    return <div
                        key={item.order}
                        onClick={e => onClickFolderHandler(item.title)}
                        className={'text-right h-fit cursor-pointer'}
                    >{item.title}</div>
                })}
            </div>}
        </Flex.VStack>
    )
}

export default FolderDropDown