"use client"

import { MenuBody } from '@/components/header/HomeNav'
import { Flex } from '@/components/style/Flex'
import { RouteInform } from '@/values/routes'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { isNullishCoalesce } from 'typescript'
import FolderTitle from './FolderTitle'
import FolderSelectDiv from './FolderSelectDiv'

const FolderDropDown = ({ data }: { data: MenuBody }) => {
    const [turn, setTurn] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('');

    const toggleHandler = () => {
        setTurn(prev => !prev);
    };

    const onClickFolderHandler = (text: string) => {
        setSelected(text);
        toggleHandler();
    };

    return (
        <Flex.VStack className={'gap-0 w-full'}>
            <FolderTitle onClick={toggleHandler} selected={selected} />
            <FolderSelectDiv
                onClick={onClickFolderHandler}
                turn={turn}
                data={data}
            />
        </Flex.VStack>
    )
}

export default FolderDropDown