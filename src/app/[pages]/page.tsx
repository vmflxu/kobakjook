import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

type PageParams = {
    pages: string,
}
const page = ({ params }: { params: PageParams }) => {
    return (
        <div className='w-full'>
            {`Page 이름은 ${params.pages} 페이지`}
        </div>
    )
}

export default page