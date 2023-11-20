import { Flex } from '@/components/style/Flex'
import React, { useState } from 'react'
import SearchModule from './SearchModule';
import { ResPostSchema } from '@/app/writepage/page';

const SearchBox = ({data}:{data:ResPostSchema[]}) => {
  return (
    <Flex.Center className={'w-full h-fit py-[30px] gap-8'}>
      <SearchModule
        data={data}
        className='w-fit group bg-white rounded-[21px] overflow-hidden items-baseline border-[1px] border-slate-500'
      />
    </Flex.Center>
  )
}

export default SearchBox