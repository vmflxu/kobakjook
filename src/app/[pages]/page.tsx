import React from 'react'

const page = ({ params }: { params: string }) => {
    return (
        <div>{`받은 값은 ${params}`}</div>
    )
}

export default page