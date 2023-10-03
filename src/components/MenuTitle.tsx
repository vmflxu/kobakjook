"use client"
import { RouteInform } from '@/values/routes';
import { textColor } from '@/values/styles';
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge';

const MenuTitle = ({ data }: { data: RouteInform }) => {
    const route = useRouter();
    const pathName = usePathname();
    const [color, setColor] = useState<string>(textColor.normal);

    const onClickHandler = () => {
        route.push(data.url);
    }

    useEffect(() => {
        const parsedPath = pathName.split('/').slice(1);
        const parsedDataPath = data.url.replaceAll('/', '');

        if (parsedPath[0] === parsedDataPath) {
            setColor(textColor.selected);
        } else {
            setColor(textColor.normal);
        }

    }, [pathName]);

    return (
        <span className={`${twMerge(color,'hover:text-blue-500')}`} onClick={onClickHandler}>
            {data.title}
        </span>
    )
}

export default MenuTitle