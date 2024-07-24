import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    cookies().set('token', '', { expires: new Date(0), httpOnly: true });

    return NextResponse.json({ message: "Logout successful" }, { status: 200 });
}