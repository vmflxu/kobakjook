import DropDown from '@/components/common/DropDown'
import { Flex } from '@/components/style/Flex'
import React, { useState } from 'react'

const SearchConditionArea = () => {
    const [list,setList] = useState<Array<string>>(['1','2']);
    const [select,setSelect] = useState<string>('');
  return (
    <Flex.HCenter className='w-full'>
        <DropDown list={list} listDispatch={setSelect}/>
        
    </Flex.HCenter>
  )
}

export default SearchConditionArea