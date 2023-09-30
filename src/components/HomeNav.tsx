import { db } from '@/app/layout'
import { collection, collectionGroup, doc, getDoc, getDocs } from 'firebase/firestore'
import React from 'react'

const HomeNav = async () => {
    const list = doc(db, "Routers");
    const answer = await getDoc(list);
    // const b = collectionGroup(db, "Routers");
    console.log('list-----------------------------', answer.data());
    return (
        <nav className='flex flex-col w-full bg-red-200 mx-auto h-full items-center min-h-screen'>
            <span className='w-fit'>dd</span>
            <span className='w-fit'>dd</span>
        </nav>
    )
}

export default HomeNav