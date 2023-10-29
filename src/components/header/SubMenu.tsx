"use client"
import { RouteInform } from '@/values/routes'
import { textColor } from '@/values/styles'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const SubMenu = ({ menu }: { menu: RouteInform }) => {
    const pathName = usePathname();
    const [style, setStyle] = useState<string>('text-normal text-white');

    useEffect(() => {
        const parsedPath = pathName.split('/').slice(1)[1];
        const parsedDataPath = menu.path.replace('/', '');
        const subMenuStyle = JSON.stringify(parsedPath) === JSON.stringify(parsedDataPath) ? 'text-red-700' : 'text-white';
        const mergedStyle = twMerge('text-normal hover:text-blue-500', subMenuStyle);
        setStyle(mergedStyle);
    }, [pathName]);
    return (
        <span className={style}>{menu.title}<br /></span>
    )
}

export default SubMenu