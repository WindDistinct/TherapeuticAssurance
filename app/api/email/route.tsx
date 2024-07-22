import { NextRequest, NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";
import nodemailer from 'nodemailer';

//Declaramos las llaves de acceso al proveedor de correo
const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export async function POST(req: NextRequest) {

    try {
        /* //Obtenemos los datos recopilados en el formulario
        const body = await req.json();
        console.log(body);
 
        //Deconstruimos los datos obtenidos del formulario en sus propiaas variables
        const { name, email, special, message } = body;
 
        //Declaramos a Mailgun como una entidad interactuable empleando los datos del formulario
        const mailgun = new Mailgun(FormData);
 
        //Construimos la instancia con la que vamos a trabajar
        const client = mailgun.client({ username: 'api', key: API_KEY });
 
        //Establecemos los parámetros del correo
        const messageData = {
            from: "Formulario de Contacto <contacto@therapeuticassurance.com>",
            to: ["ao.nicolasr@gmail.com"],
            subject: "Solicitud de información",
 
            text: `Saludos!
             
            Tiene un mensaje proveniente de: ${name}, ${email}
             
            Se solicita información sobre las sesiones de ${special} y se especificó lo siguiente:
             
            ${message}`,
        };
 
        //Lo enviamos
        const emailRes = await client.messages.create(DOMAIN, messageData);
        console.log("Email enviado:", emailRes);*/
 
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