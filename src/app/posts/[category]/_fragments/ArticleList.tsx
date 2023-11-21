import { Flex } from '@/components/style/Flex'
import React from 'react'
import PostCard from './PostCard'
import { ResPostSchema } from '@/app/writepage/page'

const ArticleList = ({ data, category }: { data: ResPostSchema[], category: string }) => {
    return (
        <Flex.VCenter className='w-full gap-4'>
            <div className='font-bold'>포스트</div>
            <div className='grid grid-flow-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full h-fit'>
                {(!!data && data.length > 0) && data.map((item, idx) => {
                    return <PostCard
                        key={idx}
                        data={item}
                    />
                })}
            </div>
            {data.length === 0 && <Flex.Center className='h-screen'>{`No "${category}" Posts in Blog`}</Flex.Center>}
        </Flex.VCenter>
    )
}

export default ArticleList