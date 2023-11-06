'use server'

import Comment, { CommentSchemaType } from "@/models/comment";
import { connectDB } from "../mongo";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const createComment = async (id:string,formData: FormData) => {
    // 'use server'
    // Body 세팅
    const writter = formData.get('writter') as string ?? 'Anonymous';
    const password = formData.get('password') as string ?? process.env.BASIC_PW;
    const comment = formData.get('comment') as string;
    const writeAt = Date.now()+9*60*60*1000;
    const targetId = id as string;
    // const targetId = formData.get('targetId') as string;
    // const targetId='123';

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
        revalidatePath(`/article/${id}`);
        // return NextResponse.json({msg: 'Create a Comment is success'})
        // const result = JSON.parse(JSON.stringify({msg: 'Create a Comment is success'}));
        // return NextResponse.json(result);
    } catch (err: any) {
        console.log('error is occured : ', err.message);
        return NextResponse.json({
            msg: err.message
        }, {
            status: 500
        })
    }


}

export default createComment;