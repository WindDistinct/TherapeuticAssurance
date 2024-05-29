import { connectToMongoDB } from "@/server/dbConfig/dbConfig";
import User from "@/server/model/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { error } from "console";

connectToMongoDB();

//POST - Validar Usuario
export async function POST(request: NextRequest) {
    try {
        //Obtener la información del Body
        const reqBody = await request.json();

        //Deconstruir las variables entrantes
        const {email, password} = reqBody;

        console.log(reqBody);

        //Verificar que el usuario existe
        const user = await User.findOne({email});

        //Si no existe
        if(!user) {
            return NextResponse.json({
                error: "No existe este usuario",  
            },
            { status:400 })
        }
        console.log(user);

        //Verificar la contraseña
        const validPassword = await bcryptjs.compare(password, user.password)
        
        //No valida
        if (!validPassword) {
            return NextResponse.json({error: "Contraseña erronea"}, {status:400})
        }

        //Crear el token data
        const tokenData = {
            id:user._id,
            username: user.username,
            email: user.email
        }

        //Crear el token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
            expiresIn: "2d",
        });

        //cookies del usuario
        const response = NextResponse.json({
            message: "Inicio de sesión exitoso",
            success: true,
        });

        //Enviar el token a las cookies del usuario
        response.cookies.set('token',token, {httpOnly:true});
        return response;
        
    } catch(error:any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
}
