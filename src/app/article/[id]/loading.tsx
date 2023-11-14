'use client'
import { Flex } from '@/components/style/Flex'
import React from 'react'
import { ColorRing } from 'react-loader-spinner'

const loading = () => {
  return (
    <Flex.Center className='w-full h-screen text-black text-3xl'>
      <ColorRing
        visible={true}
        height="30%"
        width="30%"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </Flex.Center>
  )
}

export default loading