// import { db } from '@/app/layout'
// import { collection, collectionGroup, doc, getDoc, getDocs } from 'firebase/firestore'
import { routes } from '@/values/routes'
import Link from 'next/link';
import { headers } from "next/headers";
import React from 'react'
import MenuContainer from './MenuContainer';
import MenuTitle from './MenuTitle';
import SubMenuContainer from './SubMenuContainer';
import SubMenu from './SubMenu';

const HomeNav = () => {
    const path = headers().get('referer')?.split('/');
    const now = path?.slice(3);
    console.log('fullUrl', path);
    console.log('now',now);
    return (
        <nav className='flex flex-col w-full bg-red-200 mx-auto h-full items-center min-h-screen'>
            {
                routes.map(item => {
                    return (
                        <MenuContainer key={item.title}>
                            <div className='w-full text-left py-1 group cursor-pointer'>
                                <MenuTitle data={item} />
                                {!!item.Sub && <SubMenuContainer>
                                    {item.Sub && item.Sub.map(sub => {
                                        return (
                                            <SubMenu menu={sub} key={sub.url}/>
                                            // <Link href={sub.url} className='font-normal' key={sub.title}>{sub.title}<br /></Link>
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