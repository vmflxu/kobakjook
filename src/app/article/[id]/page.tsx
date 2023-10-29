import { ResPostSchema } from '@/app/posts/create/page';
import { Flex } from '@/components/style/Flex';
import { getHost } from '@/lib/getHost'
import React, { Suspense } from 'react'
import ArticleTitle from './_fragments/ArticleTitle';
import ArticleContent from './_fragments/ArticleContent';
import ArticleComments from './_fragments/ArticleComments';
// import { ErrorBoundary } from 'react-error-boundary';

const page = async ({ params, }: { params: { id: string }, }) => {
    const res = await fetch(`${getHost()}/api/article?id=${params.id}`);

    const a = res.json();
    const data = (await a).data as ResPostSchema;
    /**
     * 댓글 작성용 Server-Action
     * 장점 : 빠르다.
     * 단점 : 지가 쓴 댓글 드러나려면 페이지 자체를 새로고침을 해야한다.
     * 결과적으로 단점때문에 오히려 더 느린게 되어 버린다.
     * 댓글작성에는 부적절해 보이고, 
     * 새로고침을 안할 방법 떠오를 때까지는 그냥 RCC로 구성하고 클라에서 통신하는 것이 좋아보임
     * revaildateTag()를 사용해서 바뀌는 부분만 새로고침되게 만들면 될듯.
     * @param formdata 
     */
    const actionHandler = (formdata: FormData) => {

    }
    return (
        <Flex.VStack className='w-full min-h-screen h-fit pb-24 items-center text-black'>
            <ArticleTitle title={data.title} date={data.writeAt} />
            <ArticleContent content={data.content} tags={data.tags} />
            <ArticleComments id={data._id} />
            {/* <ErrorBoundary fallback={<div>Error is Occured.</div>}>
                <Suspense fallback={<p>Loading....</p>}>
                    <ArticleComments promise={a} />
                </Suspense>
            </ErrorBoundary> */}
            {/* <Flex.HStack as='form' action={actionHandler}></Flex.HStack> */}
        </Flex.VStack>
    );
}

export default page