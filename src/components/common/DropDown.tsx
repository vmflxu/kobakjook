import React, { useState } from 'react'

export type DropDownProps = {
    list:string[],
    listDispatch : React.Dispatch<React.SetStateAction<string>>,
}
const DropDown = (props:DropDownProps) => {
    
  return (
    <div>DropDown</div>
  )
}

export default DropDown