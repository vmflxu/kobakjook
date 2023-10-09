import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type GetBodyType = {
    id: string,
}
export async function GET(req: NextApiRequest) {
    // console.log('request:',req);
    return NextResponse.json({msg : 'success'});
}