import { Flex } from '@/components/style/Flex'
import React from 'react'
import { MenuBody } from '@/components/header/HomeNav';
import UploadButton from './_fragments/UploadButton';
import PostTitle from './_fragments/PostTitle';
import PostContent from './_fragments/PostContent';
import FolderDropDown from './_fragments/FolderDropDown';
import { getHost } from '@/lib/getHost';
import PostHashTag from './_fragments/PostHashTag';

export type PostSchema = {
    modified: boolean;
    tags: string[];
    writeAt: number;
    title: string;
    content: string;
    path: string;
    visit: number;
}
export type ResPostSchema = {
    _id: string;
} & PostSchema;

const page = async () => {

    const res = await fetch(`${getHost()}/api/menu`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    });
    const data: MenuBody = await res.json();

    return (
        <Flex.VCenter className={'gap-4 mx-auto px-16 w-[70%] py-16 justify-center bg-color-base'}>
            <FolderDropDown data={data} />
            <PostTitle label='제목' />
            <PostContent label='내용' />
            <PostHashTag />
            <UploadButton>Upload</UploadButton>
        </Flex.VCenter>
    );
}

export default page