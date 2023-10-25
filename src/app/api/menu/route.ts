import { connectDB } from "@/lib/mongo";
import Menu from "@/models/menu";
import Error from "next/error";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        // const path = "myblog";
        await connectDB();

        const getRoutes = await Menu.find();

        const subMenu = getRoutes;
        return NextResponse.json({ subMenu });
    } catch (err) {
        throw err;
    }
}