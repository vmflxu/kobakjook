import { Flex } from '@/components/style/Flex'
import React from 'react'
import { MenuBody } from '@/components/header/HomeNav';
import UploadButton from './_fragment/UploadButton';
import PostTitle from './_fragment/PostTitle';
import PostContent from './_fragment/PostContent';
import FolderDropDown from './_fragment/FolderDropDown';
import { headers } from 'next/headers';

const page = async () => {
    const host = headers().get("host");
    const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
    const endPoint = `${protocal}://${host}`;

    const actionHandler = async (formdata: FormData) => {
        "use server"
        console.log('action clicked');
        console.log('title:', formdata.get('title'));
        console.log('content:', formdata.get('content'));
        try {
            await fetch(`${endPoint}/api/post`,{
                method: 'POST',
                body: JSON.stringify({
                    title: formdata.get('title'),
                    path: "react",
                    content: formdata.get('content'),
                })
            });
        } catch (err) {
            console.log('Post Error:',err)
        }
    }
    return (
        <form action={actionHandler} className='mt-16'>
            <Flex.VCenter className={'gap-4 mx-auto px-16 w-[70%]'}>
                {/* <FolderDropDown data={folderList} /> */}
                <PostTitle label='제목' />
                <PostContent label='내용' />
                <UploadButton>업로드</UploadButton>
            </Flex.VCenter>
        </form>
    )
}

export default page