import React from 'react'

const page = ({ params }: { params: string }) => {
    return (
        <div className='w-full'>
            {`받은 값은 ${params}`}
        </div>
    )
}

export default page