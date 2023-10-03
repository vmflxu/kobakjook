"use client"
import { RouteInform } from '@/values/routes';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge';

const SubMenuContainer = ({ data, children }: { data:RouteInform, children: React.ReactNode }) => {
    const pathName = usePathname();
    const baseStyle = 'text-right overflow-hidden group-hover:h-fit';
    const heightStyle = pathName.split('/').includes(data.url.replace('/','')) ? 'h-fit' : 'h-[0px]';
    const [style,setStyle] = useState<string>();
    
    useEffect(()=>{
        const check = data.Sub?.map(item=>item.url).includes(pathName);
        const heightStyle = check ? 'h-fit' : 'h-[0px]';
        const merge = twMerge(heightStyle, baseStyle);

        setStyle(merge);
    },[pathName])
    return (
        <section className={style}>
            {children}
        </section>
    )
}

export default SubMenuContainer