import { ResPostSchema } from "@/app/writepage/page";
import { connectDB } from "@/lib/mongo";
import Post from "@/models/post";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    // const { path } = await req.json() as GetPayload;
    const path = req.nextUrl.searchParams.get("path");
    console.log('path in api:', path);
    try {
        await connectDB();
        const res: ResPostSchema[] = await Post.find();
        !!res && console.log(`get ${path} posts in success`);
        const data = res.filter(item => item.path === path);

        return NextResponse.json({ data });
    } catch (err) {
        return NextResponse.json({ err: err, });
    }
}
