// import { db } from '@/app/layout'
// import { collection, collectionGroup, doc, getDoc, getDocs } from 'firebase/firestore'
import { routes } from '@/values/routes'
import Link from 'next/link';
import React from 'react'

const HomeNav = () => {
    // const router =
    return (
        <nav className='flex flex-col w-full bg-red-200 mx-auto h-full items-center min-h-screen'>
            {
                routes.map(item => {
                    return (
                        <div className='h-fit w-full px-4 text-sm font-semibold' key={item.title}>
                            <div className='w-full text-left py-1 group cursor-pointer'>{item.title}
                                {item.Sub !== undefined && <div className='text-right h-[0px] overflow-hidden group-hover:h-fit'>
                                    {item.Sub && item.Sub.map(sub => {
                                        return (
                                            <Link href={sub.url} className='font-normal' key={sub.title}>{sub.title}<br /></Link>
                                        )
                                    })}
                                </div>}
                            </div>
                        </div>
                    );
                })
            }
        </nav>
    )
}

export default HomeNav