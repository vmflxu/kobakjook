'use client'
import postImage from '@/lib/firebase/postImage';
import store from '@/store/store';
import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-ts'

Quill.register('modules/ImageResize', ImageResize);
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
    const quillRef = useRef<ReactQuill>(null);

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type','file');
        input.setAttribute('accept', 'image/*');
        input.click();
        input.addEventListener('change', async () => {
            if(!!input.files && !!quillRef.current){
                try {
                    const file = input.files[0];
                    const imageUrl = await postImage(file);
                    console.log('imageUrl in Editor:', imageUrl);
                    const editor = quillRef.current.getEditor();
                    const range = editor.getSelection();
                    const indexRange = range?.index as number;
                    // editor.formatLine(indexRange,range?.length as number,'alt',file.name);
                    // const delta = editor.insertEmbed(indexRange, 'image', imageUrl);
                    // editor.removeFormat(range?.index,range?.index+1);
                    // editor.insertEmbed(indexRange, 'image', imageUrl);
                    // const newOps = delta.ops?.map(op =>{
                    //     const imgAttributes = {
                    //         ...op.attributes,
                    //         alt: file.name,
                    //     };

                    //     return {
                    //         ...op,
                    //         attributes : imgAttributes,
                    //     }
                    // });
                    // delta.ops = newOps;
                    // editor.updateContents(delta);
                    editor.clipboard.dangerouslyPasteHTML(
                        `<img src=${imageUrl} alt=${file.name} />`
                    )
                    editor?.setSelection(indexRange+1,0);
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
            ImageResize: {
                parchment: Quill.import('parchment'),
                modules: ['Resize', 'DisplaySize'],
                
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