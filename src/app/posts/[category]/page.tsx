import { PostPayload } from '@/app/api/post/route';
import { Flex } from '@/components/style/Flex';
import { getHost } from '@/lib/getHost';
import React from 'react'
import PostCard from './_fragments/PostCard';
import SearchBox from './_fragments/SearchBox';
import { ResPostSchema } from '@/app/writepage/page';
import LatestComments from './_fragments/LatestComments';

type PageParams = {
    category: string,
}

const page = async ({ params, }: { params: PageParams, }) => {
    const res = await fetch(`${getHost()}/api/post?path=${params.category}`, {
        method: 'GET',
    });
    const data = (await res.json()).data as ResPostSchema[];

    return (
        <Flex.HCenter className={'w-full lg:w-[1200px] h-fit flex-wrap gap-8 text-black mb-24'}>
            <SearchBox data={data} />
            <div className='w-full h-[1px] bg-gray-300' />
            <LatestComments />
            <div className='w-full h-[1px] bg-gray-300' />
            <Flex.VCenter className='w-full gap-4'>
                <div className='font-bold'>포스트</div>
                <div className='grid grid-flow-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full h-fit'>
                    {/* <Flex.HCenter className='w-full flex-wrap gap-10'> */}
                    {(!!data && data.length > 0) && data.map((item, idx) => {
                        return <PostCard
                            key={idx}
                            data={item}
                        />
                    })}
                    {/* </Flex.HCenter> */}
                </div>
                {data.length === 0 && <Flex.Center className='h-screen'>{`No "${params.category}" Posts in Blog`}</Flex.Center>}
            </Flex.VCenter>
        </Flex.HCenter>
    )
}

export default page