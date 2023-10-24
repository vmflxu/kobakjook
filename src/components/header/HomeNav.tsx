import { RouteInform, routes } from '@/values/routes'
import Link from 'next/link';
import { headers } from "next/headers";
import React from 'react'
import MenuContainer from './MenuContainer';
import MenuTitle from './MenuTitle';
import SubMenuContainer from './SubMenuContainer';
import SubMenu from './SubMenu';
import { getHost } from '@/lib/getHost';

export type MenuBody = {
    subMenu: RouteInform[],
}

const HomeNav = async () => {
    const res = await fetch(`${getHost()}/api/menu`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    });
    const data: MenuBody = await res.json();

    return (
        <nav className='flex flex-col w-full mx-auto h-full flex-1 items-center'>
            {
                routes.map(item => {
                    return (
                        <MenuContainer key={item.title}>
                            <div className='w-full text-left py-1 group cursor-pointer'>
                                <MenuTitle data={item} />
                                {item.title === 'Posts' && <SubMenuContainer route={item.path.replace('/', '')}>
                                    {!!data && data.subMenu.map(sub => {
                                        return (
                                            <Link href={'/posts' + sub.path} key={sub.path}>
                                                <SubMenu menu={sub} />
                                            </Link>
                                        )
                                    })}
                                </SubMenuContainer>}

                            </div>
                        </MenuContainer>
                    );
                })
            }
        </nav>
    )
}

export default HomeNav