"use client"

import { Flex } from '@/components/style/Flex'
import React from 'react'

const FolderTitle = ({ onClick, selected }: { onClick: () => void, selected: string }) => {
    return (
        <Flex.HBetween
            onClick={onClick}
            className={'bg-color-strong p-4 text-white w-full cursor-pointer'}
        >
            <div className={'h-fit'}>폴더</div>
            <div className={'font-semibold'}>{selected ?? ''}</div>
        </Flex.HBetween>
    )
}

export default FolderTitle