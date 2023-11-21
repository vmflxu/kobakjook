import React from 'react'

const MenuContainer = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className='h-fit w-full px-8 text-normal font-semibold z-50'>
            {props.children}
        </div>
    )
}

export default MenuContainer