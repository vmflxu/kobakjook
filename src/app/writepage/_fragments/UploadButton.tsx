'use client'
import store from '@/store/store'
import React from 'react'
import { PostSchema } from '../page';
import { useRouter } from 'next/navigation';
import { Flex } from '@/components/style/Flex';

const UploadButton = ({ children }: { children: React.ReactNode }) => {
    const { title, path, content, tags } = store.useCreatePost();
    const router = useRouter();
    // const pathname = usePathname();
    // const urlparams = useSearchParams();
    const host = window.location.origin;

    // router.basePath
    const uploadHandler = async () => {
        const payload: PostSchema = {
            title,
            path,
            content,
            tags,
            writeAt: Date.now(),
            modified: false,
            visit: 0,
        };
        try {
            const res = await fetch(`${host}/api/post`, {
                method: 'POST',
                body: JSON.stringify(payload),
            });
            router.push(`/posts/${path}`, {
                scroll: true,
            });
        } catch (err) {
            console.log('Upload Error is occured.');
        }
    }
    return (
        <Flex.HCenter className='w-full'>
            <button
                onClick={uploadHandler}
                className={'w-fit border-color-strong border-2 py-2 px-8 rounded-full text-gray-600 font-bold hover:text-white hover:bg-color-strong'}>
                {children}
            </button>
        </Flex.HCenter>
    )
}

export default UploadButton