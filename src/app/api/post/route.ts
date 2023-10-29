import { PostSchema, ResPostSchema } from "@/app/posts/create/page";
import { connectDB } from "@/lib/mongo";
import Post from "@/models/post";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export type PostPayload = {
    title: string,
    path: string,
    content: string,
}

export type GetPayload = {
    path: string,
}

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

export async function POST(req: NextRequest) {
    const payload = await req.json() as PostSchema;
    console.log('******');
    console.log(payload);
    console.log('******');
    try {
        await connectDB('myblog');
        await Post.create(payload);

        return NextResponse.json({ msg: "Create a Post is success" });
    } catch (err) {
        return NextResponse.json({ err: err, });
    }
}