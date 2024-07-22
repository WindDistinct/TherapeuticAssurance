import jwt from "jsonwebtoken";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const auth = () => { 
    console.log(cookies());
    const token = cookies().get('token')?.value; // Extract the value of the token
    console.log("Token from request:", token); // Debug log

    if (token == null) {
        console.log("Token not found");
        return null;
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as jwt.JwtPayload;
        return {
            id: decoded.id,
            username: decoded.username,
            email: decoded.email
        }; // Return the user data
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            console.log("Token has expired");
            // Handle token expiration specifically (e.g., redirect to login or refresh token)
            return null;
        }

        console.log("Token verification error:", error);
        return null; // Handle other verification errors
    }
}