'use server'

import Comment, { CommentSchemaType } from "@/models/comment";
import { connectDB } from "../mongo";
import { NextResponse } from "next/server";

const createComment = async (formData: FormData) => {
    // Body 세팅
    console.log('액션 들어오는 것 성공, 폼데이터:',formData);
    const writter = formData.get('writter') as string ?? 'Anonymous';
    const password = formData.get('password') as string ?? process.env.BASIC_PW;
    const comment = formData.get('comment') as string;
    const writeAt = Date.now();
    const targetId = formData.get('targetId') as string;

    const payload: CommentSchemaType = {
        writeAt,
        writter,
        password,
        comment,
        targetId,
        modified: false,
    };

    // 통신 구현
    try {
        console.log('[Create] Comment Payload:', payload);
        await connectDB();
        await Comment.create(payload);

        return NextResponse.json({msg: 'Create a Comment is success'})
        
    } catch (err: any) {
        console.log('error is occured : ', err.message);
        return NextResponse.json({
            msg: err.message
        }, {
            status: 500
        })
    }


}

// export default comment;

export default createComment;