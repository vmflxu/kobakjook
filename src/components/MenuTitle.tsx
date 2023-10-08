import { RouteInform } from '@/values/routes';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import SubMenuTrigger from './SubMenuTrigger';

const MenuTitle = ({ data }: { data: RouteInform }) => {

    return (
        <SubMenuTrigger data={data}>
            {
                data.Sub === undefined
                    ? (
                        <Link href={data.url}>
                            <span className={'text-inherit hover:text-blue-500'}>
                                {data.title}
                            </span>
                        </Link>
                    )
                    : (
                        <span className={'text-inherit hover:text-blue-500'}>
                            {data.title}
                        </span>
                    )
            }
        </SubMenuTrigger>
    )
}

export default MenuTitle;