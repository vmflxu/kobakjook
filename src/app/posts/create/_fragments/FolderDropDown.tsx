"use client"

import { MenuBody } from '@/components/header/HomeNav'
import { Flex } from '@/components/style/Flex'
import React, { useState } from 'react'
import FolderTitle from './FolderTitle'
import FolderSelectDiv from './FolderSelectDiv'
import store from '@/store/store'

const FolderDropDown = ({ data }: { data: MenuBody }) => {
    const [turn, setTurn] = useState<boolean>(false);
    const [folder,setFolder] =useState<string>("");
    const { path, setProperty } = store.useCreatePost();

    const toggleHandler = () => {
        setTurn(prev => !prev);
    };

    const onClickFolderHandler = (path: string, name: string) => {
        setProperty({
            path: path.replace('/',''),
        });
        setFolder(name);
        toggleHandler();
    };

    return (
        <Flex.VStack className={'gap-0 w-full'}>
            <FolderTitle onClick={toggleHandler} selected={folder} />
            <FolderSelectDiv
                onClick={onClickFolderHandler}
                turn={turn}
                data={data}
            />
        </Flex.VStack>
    )
}

export default FolderDropDown