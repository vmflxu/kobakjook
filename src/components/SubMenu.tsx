"use client"
import { RouteInform } from '@/values/routes'
import { textColor } from '@/values/styles'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const SubMenu = ({ menu }: { menu: RouteInform }) => {
    const router = useRouter();
    const pathName = usePathname();
    const [style, setStyle] = useState<string>('text-normal text-black');

    const onClickHandler = () => {
        router.push(menu.url);
    }

    const onMouseEnterHandler = () => {
        router.prefetch(menu.url);
    }

    useEffect(() => {
        const parsedPath = pathName.split('/').slice(1);
        const parsedDataPath = menu.url.replace('/', '').split('/');
        const subMenuStyle = JSON.stringify(parsedPath) === JSON.stringify(parsedDataPath) ? 'text-red-700' : 'text-black';
        const mergedStyle = twMerge('text-normal hover:text-blue-500', subMenuStyle);
        setStyle(mergedStyle);
    }, [pathName]);
    return (
        <a className={style} onClick={onClickHandler} onMouseEnter={onMouseEnterHandler}>{menu.title}<br /></a>
    )
}

export default SubMenu