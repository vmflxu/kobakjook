'use client'
import store from '@/store/store'
import React from 'react'

const SearchInput = () => {
    const { setSearchState } = store.useArticleSearch();

    return (
        <input
            name='search-word'
            className='w-[500px] h-8 bg-white px-4 py-1 text-sm peer'
            placeholder='검색어를 입력하세요.'
            onFocus={e => setSearchState({ isTurnOn: true })}
        />
    )
}

export default SearchInput