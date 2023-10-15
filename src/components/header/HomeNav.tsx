import { RouteInform, routes } from '@/values/routes'
import Link from 'next/link';
import { headers } from "next/headers";
import React from 'react'
import MenuContainer from './MenuContainer';
import MenuTitle from './MenuTitle';
import SubMenuContainer from './SubMenuContainer';
import SubMenu from './SubMenu';
import Condd from './Condd';

export type MenuBody = {
    subMenu: RouteInform[],
}

const HomeNav = async () => {
    const host = headers().get("host");
    const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
    // const protocal = "https";
    // proptocl
    const endPoint = `https://${host}`;

    const res = await fetch(`${endPoint}/api/menu`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    });
    const data: MenuBody = await res.json();

    return (
        <nav className='flex flex-col w-full mx-auto h-full items-center min-h-screen'>
            <Condd data={data} />
            {
                // routes.map(item => {
                //     return (
                //         <MenuContainer key={item.title}>
                //             <div className='w-full text-left py-1 group cursor-pointer'>
                //                 <MenuTitle data={item} />
                //                 {item.title === 'Posts' && <SubMenuContainer route={item.path.replace('/', '')}>
                //                     {!!data && data.subMenu.map(sub => {
                //                         return (
                //                             <Link href={'/posts' + sub.path} key={sub.path}>
                //                                 <SubMenu menu={sub} />
                //                             </Link>
                //                         )
                //                     })}
                //                 </SubMenuContainer>}

                //             </div>
                //         </MenuContainer>
                //     );
                // })
            }
            {/* <div>{temp}</div> */}
        </nav>
    )
}

export default HomeNav