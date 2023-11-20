'use client'
import { Flex } from '@/components/style/Flex'
import { getHost } from '@/lib/getHost'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const LatestComments = () => {
    const path = usePathname().split('/')[2];
    const fet = async () => {
        const res = await (await fetch(`http://localhost:3000/api/comment/latest?path=${path}`)).json();
        // res.data.forEach((item: any) => {
        //     console.log(`${item.cmt} === ${item.postId}`, item.cmt === item.postId);
        // })
        console.log(res);
    }
    useEffect(() => {
        console.log('cli path:', path);
        fet();
    }, [])
    return (
        <Flex.Center className='w-full'>
            <Flex.HStack className='w-full font-bold'>최근 댓글</Flex.HStack>
        </Flex.Center>
    )
}

export default LatestComments