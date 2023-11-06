import { ResPostSchema } from "@/app/writepage/page";
import { connectDB } from "@/lib/mongo";
import Post from "@/models/post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectDB();
        const res: ResPostSchema|null = await Post.findOne({
            _id: id,
        });
        !!res && console.log(`get ${id} article in success`);
        const data = res;

        return NextResponse.json({ data });
    } catch (err:any) {
        return NextResponse.json({ err: err.message, });
    }
}