import { Flex } from '@/components/style/Flex';
import { getHost } from '@/lib/getHost'
import React, { Suspense } from 'react'
import ArticleTitle from './_fragments/ArticleTitle';
import ArticleContent from './_fragments/ArticleContent';
import ArticleComments from './_fragments/ArticleComments';
import { ErrorBoundary } from 'react-error-boundary';
import { ResPostSchema } from '@/app/writepage/page';

const page = async ({ params, }: { params: { id: string }, }) => {
    const res = await fetch(`${getHost()}/api/article?id=${params.id}`);
    const result = res.json();
    const data = (await result).data as ResPostSchema;
    return (
        <Flex.VStack className='w-full min-h-screen h-fit pb-24 items-center text-black'>
            <ArticleTitle title={data.title} date={data.writeAt} />
            <ArticleContent content={data.content} tags={data.tags} />
            <ArticleComments id={JSON.parse(JSON.stringify(data._id))} />
        </Flex.VStack>
    );
}

export default page