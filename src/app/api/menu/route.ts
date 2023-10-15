import { connectDB } from "@/lib/mongo";
import Menu from "@/models/menu";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const client = await connectDB();

        const getRoutes = await Menu.find();

        const subMenu = getRoutes;
        return NextResponse.json({ subMenu });
    } catch (err) {
        return NextResponse.json({ err: err, });
    }
}