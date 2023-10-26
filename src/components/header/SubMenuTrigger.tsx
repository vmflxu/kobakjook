"use client"
import store from '@/store/store';
import { RouteInform } from '@/values/routes';
import { textColor } from '@/values/styles';
import { data } from 'autoprefixer';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'

const SubMenuTrigger = ({ data, children }: { data: RouteInform, children: React.ReactNode }) => {
    const pathName = usePathname();
    const [color, setColor] = useState<string>(textColor.normal);

    const {
        setPath,
            toggleIsOpenSubMenu
    } = store.useNavMenuStore();

    const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        data.path === '/posts' && toggleIsOpenSubMenu();
    }

    useEffect(() => {
        const parsedPath = pathName.split('/').slice(1);
        const parsedDataPath = data.path.replaceAll('/', '');
        setPath(parsedDataPath[0]);

        if (parsedPath[0] === parsedDataPath) {
            setColor(textColor.selected);
        } else {
            setColor(textColor.white);
        }
    }, [pathName]);

    return (
        <div className={color} onClick={onClickHandler}>{children}</div>
    )
}

export default SubMenuTrigger