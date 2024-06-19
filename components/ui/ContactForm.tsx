'use client'

import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react"
import { Button, Form} from "react-bootstrap";

export default function ContactForm() {
    const [isSubmitted, setSubmitted] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [special,setSpecial] = useState('');
    const [message,setMessage] = useState('');

    const handleSpecialChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSpecial(event.target.value);
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const payload = {
            name,
            email,
            special,
            message
        }

        try {
            const res = await axios.post('/api/email', payload, {
                headers: {
                    'content-type': 'application/json'
                }
            });

            if (res.status === 200) {
                setSubmitted(true);
            }

            console.log('Respuesta del servidor:', res.data);
            
        } catch (error:any) {
            console.error('Error', error);
        }
    };

    return (
        <>
            {isSubmitted ? (
                <p className="text-success">Formulario enviado con éxito, nos estaremos contactando contigo lo antes posible</p>
            ) : ("")}
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label controlId="formBasicText">Nombre completo:</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Ingrese su nombre..."/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label controlId="formBasicEmail">E-mail:</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Ingrese su correo..."/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>En que especialidad está interesado?</Form.Label>
                    <Form.Select value={special} onChange={handleSpecialChange}>
                        <option value="">--Selecciones una especialidad--</option>
                        <option value="Fisioterapia">Fisioterapia</option>
                        <option value="Quiropractica">Quiropractica</option>
                        <option value="Pedriatria">Pediatría</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Dejenos su consulta:</Form.Label>
                    <Form.Control value={message} onChange={(e) => setMessage(e.target.value)}
                        as="textarea"
                        placeholder="Redacte su consulta..."
                        style={{ height: '100px' }}
                    />
                </Form.Group>
                <Button id="enviar" as="input" type="submit" value="Enviar" className="mx-auto p-2"/>
            </Form>
        </>
    )
}