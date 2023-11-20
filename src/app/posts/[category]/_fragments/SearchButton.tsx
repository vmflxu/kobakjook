'use client'

import { Flex } from "@/components/style/Flex";

const SearchButton = () => {
    return (
        <Flex.Center className='text-sm py-1 w-[70px]'>
            <button className='w-fit h-fit rounded-full px-2 py-1 hover:bg-gray-100'>검색</button>
        </Flex.Center>
    );
}

export default SearchButton;