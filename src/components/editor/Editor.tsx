'use client'
import store from '@/store/store';
import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const toolbarOptions = [
    ["link", "image", "video"],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
];

export const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "background",
    "color",
    "link",
    "image",
    "video",
    "width",
];



const Editor = ({
    placeholder,
}: {
    placeholder: string,
}) => {
    const { setProperty } = store.useCreatePost();
    const [editorHTML, setEditorHTML] = useState<string>('');
    const handleImage = () => {
        console.log('이미지업로드 시도');
    };
    const onChangeHandler = (html: string) => {
        setEditorHTML(html);
    }

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: toolbarOptions,
                handlers: {
                    image: handleImage
                }
            },
        }
    }, []);

    useEffect(() => {
        setProperty({
            content: editorHTML,
        });
    }, [editorHTML]);

    return (
        <div className='bg-white text-black overflow-hidden h-[642px]'>
            <ReactQuill
                placeholder={placeholder}
                // ref={quillRef}
                // value={value}
                onChange={onChangeHandler}
                theme='snow'
                modules={modules}
                formats={formats}
                className={'w-full text-black bg-white h-[600px]'}
            />
        </div>
    );
}

export default Editor