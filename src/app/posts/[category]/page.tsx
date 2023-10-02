import React from 'react'

type PageParams = {
    category: string,
}

const page = ({
    params,
    searchParams
}: {
    params: PageParams,
    searchParams: object
}) => {
    return (
        <div>{params.category}</div>
    )
}

export default page