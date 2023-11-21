'use client'
import { MenuBody } from '@/components/header/HomeNav';
import React from 'react'
import { twMerge } from 'tailwind-merge';

const FolderSelectDiv = ({
    onClick,
    data,
    turn
}: {
    onClick: (path: string, name: string) => void,
    data: MenuBody,
    turn: boolean,
}) => {
    const menuStyle = twMerge('bg-color-week h-0 text-color-base w-full overflow-hidden px-4 transition-all duration-1000', `${turn ? 'h-fit' : ''}`);
    return (
        <div className={menuStyle}>
            <div className='py-4'>
                {data.subMenu.map((item, idx) => {
                    return <div
                        key={idx}
                        onClick={e => onClick(item.path, item.title)}
                        className={'text-right h-fit cursor-pointer text-color-strong font-semibold hover:text-white'}
                    >{item.title}</div>
                })}
            </div>
        </div>
    )
}

export default FolderSelectDiv