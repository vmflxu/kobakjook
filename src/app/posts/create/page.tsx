import { Flex } from '@/components/style/Flex'
import React from 'react'
import { MenuBody } from '@/components/header/HomeNav';
import UploadButton from './_fragment/UploadButton';
import PostTitle from './_fragment/PostTitle';
import PostContent from './_fragment/PostContent';
import FolderDropDown from './_fragment/FolderDropDown';
import { headers } from 'next/headers';
import { getHost } from '@/lib/getHost';
import StateTester from './_fragment/StateTester';

export type PostSchema = {
    isModified: boolean;
    tags: string[];
    writeAt: number;
    title: string;
    content: string;
    path: string;
}
const page = async () => {

    const actionHandler = async (formdata: FormData) => {
        "use server"

        const payload:PostSchema = {
            title: formdata.get('title') as string,
            content: formdata.get('content') as string,
            path: 'react',
            writeAt: Date.now(),
            tags:[],
            isModified: false,
        }
        try {
            await fetch(`${getHost()}/api/post`,{
                method: 'POST',
                body: JSON.stringify(payload),
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
                <StateTester />
                <UploadButton>업로드</UploadButton>
            </Flex.VCenter>
        </form>
    )
}

export default page