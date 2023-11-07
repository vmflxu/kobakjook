'use client'
import postImage from '@/lib/firebase/postImage';
import store from '@/store/store';
import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import imageResize from 'quill-image-resize'

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
    const [imageList, setImageList] = useState<File[]>([]);
    const quillRef = useRef<ReactQuill>(null);

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type','file');
        input.setAttribute('accept', 'image/*');
        input.click();
        input.addEventListener('change', async () => {
            if(!!input.files){
                try {
                    const file = input.files[0];
                    setImageList(p => [...p,file]);
                    const imageUrl = await postImage(file);
                    console.log('imageUrl in Editor:', imageUrl);
                    const editor = quillRef.current?.getEditor();
                    const range = editor?.getSelection();
                    const indexRange = range?.index as number;
                    editor?.insertEmbed(indexRange, 'image', imageUrl);
                    editor?.setSelection(indexRange+1, 0);
                } catch (err:any) {
                    console.log(err.message);
                }
            }
        })
    };
    const onChangeHandler = (html: string) => {
        setEditorHTML(html);
    }

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: toolbarOptions,
                handlers: {
                    image: imageHandler,
                }
            },
            imageResize : {
                parchment: Quill.import('parchment'),
            }
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
                ref={quillRef}
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