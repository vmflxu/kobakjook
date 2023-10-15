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
    const { path, setPath, isOpenSubMenu, openedSubMenu } = useNavMenuStore();
    const closeStyle = 'text-right h-[0px] overflow-hidden font-normal';
    const openStyle = 'text-right h-fit overflow-hidden font-normal';
    const [containerStyle, setContainerStyle] = useState<string>(openStyle);

    useEffect(() => {
        if (isOpenSubMenu) {
            setContainerStyle(openStyle);
        } else {
            setContainerStyle(closeStyle);
        }
    }, [isOpenSubMenu]);
    return (
        <section className={containerStyle}>
            {children}
        </section>
    )
}

export default SubMenuContainer