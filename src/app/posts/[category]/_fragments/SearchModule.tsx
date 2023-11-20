'use client'
import DropDown from '@/components/common/DropDown'
import { Flex } from '@/components/style/Flex'
import React, { useEffect } from 'react'
import SearchInput from './SearchInput';
import SearchDetails from './SearchDetails';
import SearchButton from './SearchButton';
import store from '@/store/store';
import { ResPostSchema } from '@/app/writepage/page';

const SearchModule = ({ className, data }: { className?: string, data:ResPostSchema[] }) => {
  const { 
    isTurnOn, 
    selectedFilter,
    setSearchState, 
    initState, 
  } = store.useArticleSearch();
  // TODO: 필터선택
  // const getSearchResult = () => {
  //   const filter = switch (selectedFilter) {
  //     case :
        
  //       break;
    
  //     default:
  //       break;
  //   }
  //   const result = data.filter(item=>item.)
  // }

  const onSubmitHandler = (formData: FormData) => {
    addSearchHistory(formData);
    setSearchState({
      searchHistory: JSON.parse(localStorage.getItem('s_h') as string),
    });
  }

  useEffect(() => {
    const searchHistory = JSON.parse(localStorage.getItem('s_h') as string);
    setSearchState({
      searchHistory,
    });
    return () => {
      initState();
    }
  }, [])
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

export default SearchModule;

const addSearchHistory = (formData: FormData) => {
  const text = formData.get('search-word') as string;
  let prev = localStorage.getItem('s_h') ? JSON.parse(localStorage.getItem('s_h') as string) : [];
  if (prev.length > 9) prev = prev.slice(1);
  prev.push(text);
  localStorage.setItem('s_h', JSON.stringify(prev));
}