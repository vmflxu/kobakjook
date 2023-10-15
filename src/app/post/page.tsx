import { Flex } from '@/components/style/Flex'
import React from 'react'
import { endPoint } from '../layout';
import { MenuBody } from '@/components/header/HomeNav';
import UploadButton from './_fragment/UploadButton';
import PostTitle from './_fragment/PostTitle';
import PostContent from './_fragment/PostContent';
import FolderDropDown from './_fragment/FolderDropDown';

const page = async () => {
    const res = await fetch(`${endPoint}/api/menu`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    });
    const folderList: MenuBody = await res.json();
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
                <FolderDropDown data={folderList} />
                <PostTitle label='제목' />
                <PostContent label='내용' />
                <UploadButton>업로드</UploadButton>
            </Flex.VCenter>
        </form>
    )
}

export default page