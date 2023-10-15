import React from 'react'

const UploadButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <button
            type="submit"
            className={'border-gray-600 border-2 py-2 px-4 rounded-full text-gray-600 font-bold hover:text-white hover:bg-gray-600 '}>
            {children}
        </button>
    )
}

export default UploadButton