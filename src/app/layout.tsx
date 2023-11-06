import './globals.css'
import type { Metadata } from 'next'
import HomeNav from '@/components/header/HomeNav';
import Link from 'next/link';
import Introduce from '@/components/header/Introduce';
import HeaderBg from '#/profile/bg_header.jpg';
export const metadata: Metadata = {
  title: 'practice',
  // title: '코박죽 블로그',
  description: 'Generated by create next app',
}
// style={{backgroundImage:`url("${getHost()}/assets/images/bg_header.jpg")`
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const src = HeaderBg.src;
  return (
    <html lang="en">
      <body className='flex flex-row gap-0 font-Pretendard font-normal text-lg text-white'>
        <header
          className={`flex flex-col w-0 h-screen items-center gap-8 flex-none top-0 sticky lg:w-96 invisible lg:visible`}
          style={{
            backgroundImage: `url('${src}')`,
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover',
            backgroundPositionX: '50%'
          }}
        >
          <Introduce />
          <HomeNav />
        </header>
        <main className='w-full h-fit'>
          {children}
        </main>
        <Link href='/writepage' className={'fixed right-8 bottom-8 overflow-hidden rounded-2xl bg-blue-500 px-8 py-4 text-white font-bold hover:bg-slate-700 cursor-pointer'}>
          {"글 작성"}
        </Link>
      </body>
    </html >
  )
}
