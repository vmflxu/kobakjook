'use client'

import { Flex } from '@/components/style/Flex'
import React, { useEffect, useState } from 'react'
import { LuDelete } from "react-icons/lu";

const SearchHistory = () => {
    const [history, setHistory] = useState<string[]>(JSON.parse(localStorage.getItem('s_h') as string));
    // const history = JSON.parse(localStorage.getItem('s_h') as string);

    const onClickHandler = (word: string) => {
        const result = history.filter((item: string) => item !== word);
        setHistory(result);
        localStorage.setItem('s_h', JSON.stringify(result));
    }
    // useEffect(()=>{

    // },[history]);
    return (
        <Flex.VStack className='flex flex-1 text-sm text-gray-600 px-4'>
            {
                (!!history && history.length > 0)
                    ? history.map((item: string) => <div
                        className={'flex flex-row gap-2 w-full'}
                        key={item}
                    >
                        <span>{item}</span>
                        <button
                            onClick={e => onClickHandler(item)}
                            className='hover:text-blue-500'>
                            <LuDelete size={'16px'} />
                        </button>
                    </div>)
                    : '검색 기록이 존재하지 않습니다.'
            }
        </Flex.VStack>
    )
}

export default SearchHistory