import { RouteInform, routes } from '@/values/routes'
import Link from 'next/link';
import { headers } from "next/headers";
import React from 'react'
import MenuContainer from './MenuContainer';
import MenuTitle from './MenuTitle';
import SubMenuContainer from './SubMenuContainer';
import SubMenu from './SubMenu';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/layout';

const HomeNav = async () => {
    const subMenuRef = collection(db, "Posts");
    const snapShot = await getDocs(subMenuRef);
    let subMenu: RouteInform[] = [];
    // const temp = snapShot.docs[0].id;
    snapShot?.forEach((doc) => {
        subMenu.push({
            id: doc.id,
            path: '/posts' + doc.data().path,
            order: doc.data().order,
        })
    });
    subMenu.sort((a, b) => (a.order as number) - (b.order as number));
    return (
        <nav className='flex flex-col w-full mx-auto h-full items-center min-h-screen'>
            {
                routes.map(item => {
                    return (
                        <MenuContainer key={item.id}>
                            <div className='w-full text-left py-1 group cursor-pointer'>
                                <MenuTitle data={item} />
                                {item.id === 'Posts' && <SubMenuContainer route={item.path.replace('/', '')}>
                                    {subMenu.length > 0 && subMenu.map(sub => {
                                        return (
                                            <SubMenu menu={sub} key={sub.path} />
                                        )
                                    })}
                                </SubMenuContainer>}

                            </div>
                        </MenuContainer>
                    );
                })
            }
            {/* <div>{temp}</div> */}
        </nav>
    )
}

export default HomeNav