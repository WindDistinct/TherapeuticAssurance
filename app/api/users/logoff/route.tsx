import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const response = NextResponse.json({ message: "Logout successful" }, { status: 200 });
    cookies().set('token', '', { expires: new Date(0), httpOnly: true });
    console.log(response);
    return response;
}