import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type GetBodyType = {
    id: string,
}
export async function GET(req: NextRequest) {
    // console.log('request:',req);
    return NextResponse.json({msg : 'success'});
}