import React from 'react'

const WritepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-full bg-color-base'>{children}</div>
  )
}

export default WritepageLayout