"use client"
import { RouteInform } from '@/values/routes'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const SubMenu = ({ menu }: { menu: RouteInform }) => {
    const pathName = usePathname();
    const [style, setStyle] = useState<string>('text-normal text-color-strong');

    useEffect(() => {
        const parsedPath = pathName.split('/').slice(1)[1];
        const parsedDataPath = menu.path.replace('/', '');
        const subMenuStyle = JSON.stringify(parsedPath) === JSON.stringify(parsedDataPath) ? 'text-color-base' : 'text-color-week';
        const mergedStyle = twMerge('text-normal hover:text-color-base', subMenuStyle);
        setStyle(mergedStyle);
    }, [pathName]);
    return (
        <span className={style}>{menu.title}<br /></span>
    )
}

export default SubMenu