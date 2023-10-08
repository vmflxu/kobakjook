"use client"
import useNavMenuStore from '@/store/useNavMenuStore';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SubMenuContainer = ({
    route,
    children
}: {
    route: string,
    children: React.ReactNode
}) => {
    const { path, setPath, openedSubMenu } = useNavMenuStore();
    const baseStyle = 'text-right h-[0px] overflow-hidden font-normal';
    const openStyle = 'text-right h-fit overflow-hidden font-normal';
    const [containerStyle, setContainerStyle] = useState<string>(baseStyle);

    const pathName = usePathname();

    useEffect(() => {
        setPath(pathName.replace('/', '').split('/')[0]);

        if (path === route || openedSubMenu.includes(pathName.replace('/', '').split('/')[0])) {
            setContainerStyle(openStyle);
        } else {
            setContainerStyle(baseStyle);
        }
    }, [pathName]);

    useEffect(() => {
        if (openedSubMenu.includes(route)) {
            setContainerStyle(openStyle);
        } else {
            setContainerStyle(baseStyle);
        }
    }, [openedSubMenu]);
    return (
        <section className={containerStyle}>
            {children}
        </section>
    )
}

export default SubMenuContainer