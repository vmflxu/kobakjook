import { Flex } from '@/components/style/Flex'
import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image';
import path from '@/values/asset/path';
import profile from '#/profile/JYP.png'
import HomeNav from '@/components/HomeNav';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { headers } from 'next/headers';
import { MongoClient } from 'mongodb';
import Link from 'next/link';


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const metadata: Metadata = {
  title: '코박죽 블로그',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const host = headers().get("host");
  // const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
  // const res = await fetch(`${protocal}://${host}/api/menu`, { method: 'GET' });
  // const data = await res.json();

  // const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_DB as string);
  // const db = client.db();
  // const col = db.collection("Menu");

  // const ddd = await col.find().toArray();
  // client.close();
  // console.log('data', data);
  // console.log(ddd);
  // const res = await getBasic();
  // console.log(res);api/menu
  // const docRef = collection(db,"Routers");
  // const temp = await getDocs(docRef);
  // temp.forEach(doc => console.log(doc.id, doc.data()));
  return (
    <html lang="en">
      <body className='flex flex-row gap-0 font-Pretendard font-normal text-lg'>
        <header className='flex flex-col w-96 h-full sticky items-center gap-8'>
          <Flex.HStack className='w-full px-8 gap-4 mt-8 justify-between items-center'>
            <div className='aspect-square w-fit'>
              <Image
                src={profile}
                alt='profile'
                width={80}
                height={80}
                className='rounded-full'
              />
            </div>
            <Flex.VCenter className='text-normal flex-1 items-end'>
              <span>{"코드에 머리박고 죽을때까지!"}</span>
              <span>{"Frontend Developer"}</span>
            </Flex.VCenter>
          </Flex.HStack>
          <HomeNav />
        </header>
        <main className='w-full flex-1'>
          {children}
        </main>
        <div className={'fixed right-8 bottom-8 overflow-hidden rounded-2xl bg-blue-500 px-8 py-4 text-white font-bold hover:bg-slate-700 cursor-pointer'}>
          <Link href='/post'>
            {"글 작성"}
          </Link>
        </div>
      </body>
    </html >
  )
}
