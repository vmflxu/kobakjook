import { Flex } from '@/components/style/Flex';
import { getHost } from '@/lib/getHost';
import React from 'react'
import SearchBox from './_fragments/SearchBox';
import { ResPostSchema } from '@/app/writepage/page';
import LatestComments from './_fragments/LatestComments';
import ArticleList from './_fragments/ArticleList';
import { Line } from '@/components/common/Line';

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
            <Line.Helical color='gray' degree={300} />
            <LatestComments />
            <Line.Helical color='gray' degree={300} />
            <ArticleList data={data} category={params.category} />
        </Flex.HCenter>
    )
}

export default page