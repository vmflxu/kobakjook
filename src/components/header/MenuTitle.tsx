import { RouteInform } from '@/values/routes';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import SubMenuTrigger from './SubMenuTrigger';

const MenuTitle = ({ data }: { data: RouteInform }) => {

    return (
        <SubMenuTrigger data={data}>
            {
                data.title !== "Posts"
                    ? (
                        <Link href={data.path}>
                            <span className={'text-inherit hover:text-color-base'}>
                                {data.title}
                            </span>
                        </Link>
                    )
                    : (
                        <span className={'text-inherit hover:text-color-base'}>
                            {data.title}
                        </span>
                    )
            }
        </SubMenuTrigger>
    )
}

export default MenuTitle;