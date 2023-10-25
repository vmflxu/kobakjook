import { PostPayload } from '@/app/api/post/route';
import { Flex } from '@/components/style/Flex';
import { getHost } from '@/lib/getHost';
import React from 'react'

type PageParams = {
    category: string,
}

const page = async ({
    params,
    searchParams
}: {
    params: PageParams,
    searchParams: object
}) => {
    const res = await fetch(`${getHost()}/api/post?path=${params.category}`, {
        method: 'GET',
    });
    const data = (await res.json()).data as PostPayload[];

    return (
        <div>
            {(!!data && data.length > 0) && data.map((item, idx) => {
                return <div key={idx}>
                    {item.title}<br />
                    <div
                    className={'flex flex-col mt-16 mx-auto w-[800px] min-h-[screen]'}
                    dangerouslySetInnerHTML={{__html: item.content}}></div>
                </div>
            })}
            {data.length === 0 && <Flex.Center className='h-screen'>No "{params.category}" Posts in Blog</Flex.Center>}
        </div>
    )
}

export default page