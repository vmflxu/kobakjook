import { PostPayload } from '@/app/api/post/route';
import { Flex } from '@/components/style/Flex';
import { getHost } from '@/lib/getHost';
import React from 'react'
import PostCard from './_fragments/PostCard';
import SearchBox from './_fragments/SearchBox';
import { ResPostSchema } from '../create/page';

type PageParams = {
    category: string,
}

const page = async ({ params, }: { params: PageParams, }) => {
    const res = await fetch(`${getHost()}/api/post?path=${params.category}`, {
        method: 'GET',
    });
    const data = (await res.json()).data as ResPostSchema[];

    return (
        <Flex.HCenter className={'w-[1200px] h-fit flex-wrap gap-8 bg-blue-400'}>
            <SearchBox />
            <Flex.HStack className='w-full flex-wrap gap-10'>
                {(!!data && data.length > 0) && data.map((item, idx) => {
                    return <PostCard
                        key={idx}
                        data={item}
                    />
                })}
            </Flex.HStack>
            {data.length === 0 && <Flex.Center className='h-screen'>No "{params.category}" Posts in Blog</Flex.Center>}
        </Flex.HCenter>
    )
}

export default page