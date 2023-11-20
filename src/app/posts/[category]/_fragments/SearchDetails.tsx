import { Flex } from '@/components/style/Flex'
import store from '@/store/store'
import React, { useEffect } from 'react'
import FilterList from './FilterList';
import SearchHistory from './SearchHistory';
import { SlArrowUp } from "react-icons/sl";

const SearchDetails = () => {
    const { setSearchState } = store.useArticleSearch();
    return (
        <Flex.VStack className='w-full h-fit mt-1 overflow-hidden'>
            <Flex.HBetween className='w-full pb-2'>
                <FilterList />
                <SearchHistory />
                <Flex.HCenter className='w-[70px]' />
            </Flex.HBetween>
            <div className='w-full h-[1px] bg-slate-300' />
            <Flex.Center className='w-full h-fit hover:bg-gray-100 group/close'>
                <button
                    className='flex flex-row justify-center text-sm w-full h-fit my-1 group-hover/close:text-blue-500'
                    onClick={e => setSearchState({ isTurnOn: false })}>
                    <SlArrowUp size={12} />
                </button>
            </Flex.Center>
        </Flex.VStack>
    )
}

export default SearchDetails