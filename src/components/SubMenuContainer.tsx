// "use client"
import { RouteInform } from '@/values/routes';
import React from 'react'

const SubMenuContainer = ({ data, children }: { data: RouteInform, children: React.ReactNode }) => {
    const baseStyle = 'text-right h-[0px] overflow-hidden group-hover:h-fit';

    return (
        <section className={baseStyle}>
            {children}
        </section>
    )
}

export default SubMenuContainer