'use client'

import { Flex } from '@/components/style/Flex'
import store from '@/store/store';
import React, { useEffect, useState } from 'react'
import { LuDelete } from "react-icons/lu";

const SearchHistory = () => {
    const { setSearchState, searchHistory } = store.useArticleSearch();

    const reversedHistory = () => {
        const result = [...searchHistory];
        result.reverse();
        return result;
    }
    const onClickHandler = (word: string) => {
        const result = searchHistory.filter((item: string) => item !== word);
        setSearchState({
            searchHistory: result,
        });
        localStorage.setItem('s_h', JSON.stringify(result));
    }

    return (
        <Flex.VStack className='flex flex-1 text-sm text-gray-600 px-4'>
            {
                (!!searchHistory && searchHistory.length > 0)
                    ? reversedHistory().map((item: string, idx: number) => <div
                        className={'flex flex-row gap-2 w-full'}
                        key={item+String(idx)}
                    >
                        <span>{item}</span>
                        <button
                            onClick={e => onClickHandler(item)}
                            className='hover:text-blue-500'>
                            <LuDelete size={'16px'} />
                        </button>
                    </div>
                    )
                    : '검색 기록이 존재하지 않습니다.'
            }
        </Flex.VStack>
    )
}

export default SearchHistory