import { connectDB } from "@/lib/mongodb";
import Menu from "@/models/menu";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    // console.log('request:',req);
    // try {
    //     await connectDB();
    //     await Menu.create()
    // }
    return NextResponse.json({msg : 'success'});
}