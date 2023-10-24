"use client"

import { MenuBody } from '@/components/header/HomeNav'
import { Flex } from '@/components/style/Flex'
import React, { useState } from 'react'
import FolderTitle from './FolderTitle'
import FolderSelectDiv from './FolderSelectDiv'
import store from '@/store/store'

const FolderDropDown = ({ data }: { data: MenuBody }) => {
    const [turn, setTurn] = useState<boolean>(false);
    const { path, setProperty } = store.useCreatePost();

    const toggleHandler = () => {
        setTurn(prev => !prev);
    };

    const onClickFolderHandler = (text: string) => {
        setProperty({
            path: text
        });
        toggleHandler();
    };

    return (
        <Flex.VStack className={'gap-0 w-full'}>
            <FolderTitle onClick={toggleHandler} selected={path} />
            <FolderSelectDiv
                onClick={onClickFolderHandler}
                turn={turn}
                data={data}
            />
        </Flex.VStack>
    )
}

export default FolderDropDown