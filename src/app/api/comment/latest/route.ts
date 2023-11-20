import { connectDB } from "@/lib/mongo";
import Comment, { ResCommentSchemaType } from "@/models/comment";
import Post from "@/models/post";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const path = req.nextUrl.searchParams.get('path');
    console.log('route path:', path);
    try {
        await connectDB();
        const commentRes = await Comment.find().sort({
            writeAt: -1
        });
        !!commentRes && console.log(`get comments in success`);

        const postRes = await Post.find();
        let result: any = [];
        postRes
            .filter(item => item.path === path)
            .forEach((post, idx) => {
                commentRes
                    .filter(el => el.targetId.toString() === post.id.toString())
                    .forEach(d => result.push(d));
            });
        result.sort((a:any,b:any)=> b.writeAt-a.writeAt);
        const data = result.map((item:any) => {
            const dateInform = new Date(item.writeAt);
            const writeAt = `${dateInform.getFullYear()}.${dateInform.getMonth()}.${dateInform.getDate()}`
            return {
                targetId: item.targetId,
                comment: item.comment,
                writeAt,
            }
        });

        return NextResponse.json({
            data,
        });
    } catch (err: any) {
        console.log('Error MSG:', err.message);
        return NextResponse.json({
            msg: err.message,
        }, { status: 500 });
    }
}