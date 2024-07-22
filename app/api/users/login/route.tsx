import { connectToMongoDB } from "@/server/dbConfig/dbConfig";
import User from "@/server/model/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

//POST - Validar Usuario
export async function POST(request: NextRequest) {
    
    await connectToMongoDB();
    
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
            { status:401 })
        }
        console.log(user);

        //Verificar la contraseña
        const validPassword = await bcryptjs.compare(password, user.password)
        
        //No valida
        if (!validPassword) {
            console.log("Contraseña erronea");
            return NextResponse.json({error: "Contraseña erronea"}, {status:401})
        }

        //Crear el token data
        const tokenData = {
            id:user._id,
            username: user.username,
            email: user.email
        }

        //Crear el token con la información a recordar del usuario
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
            expiresIn: '2d',
        });

        //Enviar el token a las cookies del usuario
        cookies().set('token',token, {httpOnly:true});
        console.log("Inicio de sesión exitoso");
        console.log(cookies());

        return NextResponse.json({
            message: "Inicio de sesión exitoso",
            success: true,
        }, { status:200 });;
        
    } catch(error:any) {
        console.log("Hubo un error");
        return NextResponse.json({error: error.message}, {status:500})
    }
}
