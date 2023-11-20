'use client'
import React, { useState } from 'react'
import { Flex } from '../style/Flex'
import store from '@/store/store'
import { SearchFilter } from '@/store/useArticleSearch'

const DropDown = () => {
  const { selectedFilter, toggleVisible } = store.useArticleSearch();

  return (
    <Flex.VCenter
      className='pl-4 w-[70px] py-1 h-fit cursor-pointer text-center text-sm hover:font-bold peer-focus:text-red-400'
      onClick={toggleVisible}
    >
      {selectedFilter}
    </Flex.VCenter>
  )
}

export default DropDown