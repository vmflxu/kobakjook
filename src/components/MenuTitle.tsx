import { RouteInform } from '@/values/routes';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import SubMenuTrigger from './SubMenuTrigger';

const MenuTitle = ({ data }: { data: RouteInform }) => {

    return (
        <SubMenuTrigger data={data}>
            {
                data.id !== "Posts"
                    ? (
                        <Link href={data.path}>
                            <span className={'text-inherit hover:text-blue-500'}>
                                {data.id}
                            </span>
                        </Link>
                    )
                    : (
                        <span className={'text-inherit hover:text-blue-500'}>
                            {data.id}
                        </span>
                    )
            }
        </SubMenuTrigger>
    )
}

export default MenuTitle;