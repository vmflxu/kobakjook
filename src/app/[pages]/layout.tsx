import { Flex } from '@/components/style/Flex'
// import './globals.css'
import type { Metadata } from 'next'
// import {Pretendard} from 'next/font'
import { Noto_Sans_KR } from 'next/font/google'
import Image from 'next/image';
import path from '@/values/asset/path';
import profile from '#/profile/JYP.png'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
// import { pretendard } from "../../node_modules/pretendard/dist/web/static/woff.css";

const noto = Noto_Sans_KR({ subsets: ['latin'] });

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Flex.Hstack className='w-full'>
            {children}
            <section className='w-[200px] bg-blue-200 pt-8'>
                <Flex.VCenter className='text-sm font-normal'>
                    {'스크롤 위치 섹션'}
                </Flex.VCenter>
            </section>
        </Flex.Hstack>
    )
}
