'use client'
import store from '@/store/store'
import React from 'react'
import { PostSchema } from '../page';
import { useRouter } from 'next/navigation';

const UploadButton = ({ children }: { children: React.ReactNode }) => {
    const { title, path, content, tags } = store.useCreatePost();
    const router = useRouter();
    // const pathname = usePathname();
    // const urlparams = useSearchParams();
    const host = window.location.origin;

    // router.basePath
    const uploadHandler = async () => {
        const payload:PostSchema = {
            title,
            path,
            content,
            tags,
            writeAt: Date.now(),
            modified: false,
            visit:0,
        };
        try {
            const res = await fetch(`${host}/api/post`,{
                method: 'POST',
                body: JSON.stringify(payload),
            });
            router.push(`/posts/${path}`,{
                scroll: true,
            });
        } catch (err) {
            console.log('Upload Error is occured.');
        }
    }
    return (
        <button
            onClick={uploadHandler}
            className={'border-gray-600 border-2 py-2 px-4 rounded-full text-gray-600 font-bold hover:text-white hover:bg-gray-600 '}>
            {children}
        </button>
    )
}

export default UploadButton