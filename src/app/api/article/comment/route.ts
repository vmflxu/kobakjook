import { connectDB } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    // const { path } = await req.json() as GetPayload;
    // const path = req.nextUrl.searchParams.get("path");
    // const id = req.nextUrl.searchParams.get("id");
    // const objectId = new BSON.ObjectId(id as string);
    
    // console.log('path in api:', path);
    try {
        await connectDB();
        // const res: ResPostSchema|null = await Post.findOne({
        //     _id: id,
        // });
        // !!res && console.log(`get ${id} article in success`);
        // const data = res.filter(item => item.path === path);
        // const data = res;

        // return NextResponse.json({ data });
    } catch (err:any) {
        // throw new Error;
        return NextResponse.json({ err: err.message, });
    }
}