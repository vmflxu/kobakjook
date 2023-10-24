'use client'
import store from '@/store/store';
import React, { useState } from 'react'

const InputTagModule = () => {
    const [iptTag, setIptTag] = useState<string>("");
    const { setTags } = store.useCreatePost();
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            console.log('엔터키 눌렸음');
            setTags(iptTag);
            setIptTag("");
        }
    }
    return (
        <input
            value={iptTag}
            onChange={e => setIptTag(e.currentTarget.value)}
            onKeyDown={onKeyDownHandler}
        />
    )
}

export default InputTagModule