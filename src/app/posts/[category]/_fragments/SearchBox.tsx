'use client'
import { Flex } from '@/components/style/Flex'
import React from 'react'
import SearchConditionArea from './SearchConditionArea'
import SearchResultArea from './SearchResultArea'

const SearchBox = () => {
  return (
    <Flex.VCenter className={'w-full h-fit'}>
        <SearchConditionArea />
        <SearchResultArea />
    </Flex.VCenter>
  )
}

export default SearchBox