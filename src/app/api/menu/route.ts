import { connectDB } from "@/lib/mongodb";
import Menu from "@/models/menu";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const subMenu = [
        {
            title: "React",
            path: "/react"
        },
        {
            title: "NextJS",
            path: "/next-js"
        },
        {
            title: "Life",
            path: "/life"
        },
    ]
    return NextResponse.json({ subMenu });
}