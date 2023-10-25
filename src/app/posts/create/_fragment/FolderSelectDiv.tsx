'use client'
import { MenuBody } from '@/components/header/HomeNav';
import React from 'react'
import { twMerge } from 'tailwind-merge';

const FolderSelectDiv = ({
    onClick,
    data,
    turn
}: {
    onClick: (path: string, name:string) => void,
    data: MenuBody,
    turn: boolean,
}) => {
    const menuStyle = twMerge('bg-gray-300 h-0 text-black w-full overflow-hidden px-4 transition-all duration-1000', `${turn ? 'h-fit' : ''}`);
    return (
        <div className={menuStyle}>
            <div className='py-4'>
                {data.subMenu.map((item,idx) => {
                    return <div
                        key={idx}
                        onClick={e => onClick(item.path, item.title)}
                        className={'text-right h-fit cursor-pointer font-extralight hover:font-normal'}
                    >{item.title}</div>
                })}
            </div>
        </div>
    )
}

export default FolderSelectDiv