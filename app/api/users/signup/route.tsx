import { connectToMongoDB } from "@/server/dbConfig/dbConfig";
import User from "@/server/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectToMongoDB();

//POST - Crear usuario
export async function POST(request: NextRequest) {
    try {
        //Obtener la información del Body
        const reqBody = await request.json();

        //Deconstruir las variables entrantes
        const {username, email, password} = reqBody;

        console.log(reqBody);

        const user = await User.findOne({email});

        if(user) {
            return NextResponse.json({
                error: "Ya existe un usuario con estos datos",  
            },
            { status:400 })
        }

        //Generar  base de encriptación
        const salt = await bcryptjs.genSalt(10);
        //Encriptar contraseña
        const hashedPassword = await bcryptjs.hash(password,salt);

        //Crear usuario
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        //Guardarlo en la BD
        const savedUser = await newUser.save();
        
        return NextResponse.json({
            message:"Usuario creado.",
            success:true,
            savedUser,
        }, { status:201 })

    } catch (error:any) {
        return NextResponse.json({error: error.message}, { status:500 })
    } 
}