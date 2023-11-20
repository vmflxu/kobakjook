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
        // const data = commentRes;
        let result: any = [];
        postRes
            .filter(item => item.path === path)
            .forEach((post, idx) => {
                commentRes
                    .filter(el => el.targetId.toString() === post.id.toString())
                    .forEach(d => result.push(d));
                // return {
                //     postId: post.id,
                //     cmt: commentRes[0].targetId.toString(),
                // }
                // if (idx === 0) {
                //     commentRes.forEach(cm => console.log('id', String(cm.targetId)));
                // }
                // let tt = [];
                // commentRes.forEach(c => {
                //     tt.push(c.targetId);
                // });
                // // const temp = t.find(cm => cm === post.id) ?? false;
                // return tt;
                // if (temp) {
                //     return 'yy';
                //     // return {
                //     //     targetId: temp.targetId,
                //     // };
                // } else {
                //     return 'nn';
                // }
            });
        // console.log('r :', r);
        // const data = await Post.find();
        // const data = postRes;
        const data = result;
        // const data = postRes.map(item => {
        //     if(!!commentRes.find(c => c.targetId === item.id)){
        //         return {
        //             targetId: item.id,
        //             comment: c.comment,
        //         }
        //     }
        // });

        // const dataArr = commentRes.filter(item => !!postRes.find(post => post._id === item.targetId));

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