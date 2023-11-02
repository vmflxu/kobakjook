import { connectDB } from "@/lib/mongo";
import Comment, { ResCommentSchemaType } from "@/models/comment";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const id = req.nextUrl.searchParams.get('id');
    console.log('id in comment api', id);
    try {
        
        await connectDB();
        const res = await Comment.find({
            targetId: id,
        });
        !!res && console.log(`get ${id} comment in success`);
        // console.log((await res.json()).data);
        // const data = await res.json();
        // console.log(await res.json())
        return NextResponse.json({
            data: res,
        });
    } catch (err:any) {
        console.log('Error MSG:',err.message);
        return NextResponse.json({
            msg: err.message,
        }, { status : 500 });
    }
}