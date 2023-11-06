'use server'

import Comment, { CommentSchemaType } from "@/models/comment";
import { connectDB } from "../mongo";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const deleteComment = async (formData:FormData) => {
    const id = formData.get('id');
    const listId = formData.get('listId');
    // 통신 구현
    try {
        console.log('[Delete] Comment list-ID:', listId);
        console.log('[Delete] Comment comment ID:', id);
        await connectDB();
        await Comment.deleteOne({
            _id: id,
        });
        revalidatePath(`/article/${listId}`);
    } catch (err: any) {
        console.log('error is occured : ', err.message);
    }
}

export default deleteComment;