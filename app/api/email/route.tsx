import { NextRequest, NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export async function POST(req: NextRequest, res: NextResponse) {

    try {
        const body = await req.json();
        console.log(body); 

        const { name, email, special, message } = body;

        const mailgun = new Mailgun(FormData);
        const client = mailgun.client({ username: 'api', key: API_KEY });

        const messageData = {
            from: "Formulario de Contacto <contacto@therapeuticassurance.com>",
            to: ["ao.nicolasr@gmail.com"],
            subject: "Solicitud de información",
            text: `Saludos!
            
            Tiene un mensaje proveniente de: ${name}, ${email}
            
            Se solicita información sobre las sesiones de ${special} y se especificó lo siguiente:
            
            ${message}`,
        };

        const emailRes = await client.messages.create(DOMAIN, messageData);
        console.log("Email enviado:", emailRes);

        return NextResponse.json({ submitted: true });
    } catch (error:any) {
        console.error("Error al enviar el correo", error);
        return NextResponse.json({ submitted: false, error: error.message });
    }
}