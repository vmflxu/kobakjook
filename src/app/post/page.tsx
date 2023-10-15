import { Flex } from '@/components/style/Flex'
import React from 'react'

const page = () => {
    const actionHandler = async (formdata: FormData) => {
        "use server"
        console.log('action clicked');
        console.log('title:', formdata.get('title'));
        console.log('content:', formdata.get('content'));
        // revalidatePath('/write2')
    }
    return (
        <form action={actionHandler} className='mt-16'>
            <Flex.VCenter className={'gap-8 mx-auto px-16 w-[70%]'}>
                <Flex.VStack className={'bg-gray-600 p-4 text-white w-full'}>
                    <label>제목</label>
                    <input type='text' name='title' className={'border-cyan-500 text-slate-800 px-2'} />
                </Flex.VStack>
                <Flex.VStack className={'bg-gray-600 p-4 text-white w-full'}>
                    <label>내용</label>
                    <textarea name='content' className={'border-cyan-500 min-h-[300px] h-fit text-slate-800 px-2'} />
                </Flex.VStack>
                <button type="submit" className={'border-gray-600 border-2 py-2 px-4 rounded-full text-gray-600 font-bold'}>버튼눌리면</button>
            </Flex.VCenter>
        </form>
    )
}

export default page