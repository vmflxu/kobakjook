import { Flex } from '@/components/style/Flex'

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Flex.HStack className='w-full text-black'>
            {children}
            {/* <section className='w-[200px] bg-blue-200 pt-8 min-h-screen h-auto absolute'>
                <Flex.VCenter className='text-sm font-normal'>
                    {'스크롤 위치 섹션'}
                </Flex.VCenter>
            </section> */}
        </Flex.HStack>
    )
}
