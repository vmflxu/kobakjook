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

export async function POST(req: NextRequest) {
    const { title, path, content } = await req.json() as PostPayload;
    try {
        await connectDB();
        await Post.create({
            title,
            path,
            content,
        })

        return NextResponse.json({ msg: "Create a Post is success" });
    } catch (err) {
        return NextResponse.json({ err: err, });
    }
}