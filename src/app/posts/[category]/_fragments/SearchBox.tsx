import { Flex } from '@/components/style/Flex'
import React, { useState } from 'react'
import SearchModule from './SearchModule';

const SearchBox = () => {
  return (
    <Flex.Center className={'w-full h-fit py-[30px]'}>
      <SearchModule
        className='w-fit group bg-white rounded-[21px] overflow-hidden items-baseline border-[1px] border-slate-500'
      />
    </Flex.Center>
  )
}

export default SearchBox