import React from 'react'

const SubMenuContainer = ({ children }: { children: React.ReactNode }) => {
    const baseStyle = 'text-right h-[0px] overflow-hidden group-hover:h-fit';
    
    return (
        <section className={baseStyle}>
            {children}
        </section>
    )
}

export default SubMenuContainer