'use client'

import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react"

export default function ContactForm() {
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

            console.log('Respuesta del servidor:', res.data);
            
        } catch (error:any) {
            console.error('Error', error);
        }
    };

    return (
        <>

            <form onSubmit={onSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                <select value={special} onChange={handleSpecialChange} name="special">
                    <option value="">--Selecciones una especialidad--</option>
                    <option value="Fisioterapia">Fisioterapia</option>
                    <option value="Quiropractica">Quiropractica</option>
                    <option value="Pedriatria">Pediatría</option>
                </select>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
        
        </>
    )
}