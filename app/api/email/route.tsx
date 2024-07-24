import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

//Declaramos las llaves de acceso al proveedor de correo
const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export async function POST(req: NextRequest) {

    try {
 
        const body = await req.json();
 
        //Envio exitoso es marcado como Enviado en el servidor
        const { name, email, special, message } = body;
        
        const transport = nodemailer.createTransport({
            service:"gmail",
            auth: {
              user: "anderson.calderoncampos@gmail.com",
              pass: "cvku fryb lwut qgjy",
            },
        });
 
 
          const info = await transport.sendMail({
            from: `'"${name}" <${email}>'`,
            to: "anderson.calderoncampos@gmail.com",
            subject: "Therapeutic Assurance",
            text: `${message}`,
            html: ``
          });
         
 
        return NextResponse.json({ enviado: true });
 
    } catch (error:any) {
 
        console.error("Error al enviar el correo", error);

        //En caso de error, es falso
        return NextResponse.json({ enviado: false, error: error.message });
    }
}