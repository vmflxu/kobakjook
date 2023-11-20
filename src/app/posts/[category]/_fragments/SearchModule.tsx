'use client'
import DropDown from '@/components/common/DropDown'
import { Flex } from '@/components/style/Flex'
import React, { useState } from 'react'
import SearchInput from './SearchInput';
import SearchDetails from './SearchDetails';
import SearchButton from './SearchButton';
import { SearchBoxState, SearchFilter } from '@/store/useArticleSearch';
import store from '@/store/store';

const SearchModule = ({ className }: { className?: string }) => {
  const { isTurnOn } = store.useArticleSearch();
  const onSubmitHandler = (formData: FormData) => {
    const text = formData.get('search-word') as string;
    const prev = localStorage.getItem('s_h') ? JSON.parse(localStorage.getItem('s_h') as string) : [];

    prev.push(text);
    console.log(prev);
    localStorage.setItem('s_h', JSON.stringify(prev));
  }
  return (
    <Flex.VStack className={className}>
      <form
        action={onSubmitHandler}
        className={'flex flex-row justify-between w-full items-baseline'}
      >
        <DropDown />
        <SearchInput />
        <SearchButton />
      </form>
      {isTurnOn && <SearchDetails />}
    </Flex.VStack>
  )
}

export default SearchModule