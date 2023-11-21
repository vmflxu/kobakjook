'use client'
import { Flex } from '@/components/style/Flex'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
export type CommentsInform = {
    targetId: string,
    comment: string,
    writeAt: string,
}
const LatestComments = () => {
    const router = useRouter();

    const [comments, setComments] = useState<CommentsInform[]>();
    const path = usePathname().split('/')[2];
    const fet = async () => {
        const res = await (await fetch(`/api/comment/latest?path=${path}`)).json();
        setComments(res.data as CommentsInform[]);
    }

    const commentClickHandler = (text: string) => {
        router.push(text);
    }
    useEffect(() => {
        fet();
    }, []);

    return (
        <Flex.Center className='w-full gap-4'>
            <Flex.HStack className='w-full font-bold'>
                {`${path.charAt(0).toUpperCase() + path.slice(1)} 카테고리의 최근 댓글`}
            </Flex.HStack>
            <Flex.VStack className='w-full px-2 lg:w-4/5'>
                {
                    !!comments
                        ? comments.length > 0
                            ? <div>
                                {
                                    comments.map((item, idx) => {
                                        if (idx > 4) return;
                                        return <Flex.HBetween
                                            className='cursor-pointer hover:font-semibold hover:text-blue-500 group'
                                            onClick={e => commentClickHandler(`/article/${item.targetId}`)}
                                            key={item.comment + String(idx)}>
                                            <span>{item.comment}</span>
                                            <span className='text-sm text-gray-500 group-hover:text-blue-500'>{item.writeAt}</span>
                                        </Flex.HBetween>
                                    })
                                }
                            </div>
                            : <div className='w-full text-center'>이 카테고리에 댓글이 없습니다. 댓글을 달아주세요.</div>
                        : <div className='w-full text-center'>댓글을 가져오고 있어요 잠시만 기다려주세요!</div>
                }
            </Flex.VStack>
        </Flex.Center>
    )
}

export default LatestComments