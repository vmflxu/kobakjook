'use client'
import { Flex } from '@/components/style/Flex'
import store from '@/store/store'
import { SearchFilter } from '@/store/useArticleSearch'
import React from 'react'

const FilterList = () => {
    const { filterList, isTurnOn, setSearchState } = store.useArticleSearch();

    const onFilterClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setSearchState({
            selectedFilter: e.currentTarget.innerText as SearchFilter,
        });
    }

    return (
        <Flex.VCenter className='text-sm pl-4 w-[70px] text-center text-gray-600 justify-start'>
            {isTurnOn &&
                filterList.map(item => <div
                    key={item}
                    className='hover:font-bold hover:text-slate-800 cursor-pointer'
                    onClick={onFilterClickHandler}
                >{item}</div>)
            }
        </Flex.VCenter>
    )
}

export default FilterList