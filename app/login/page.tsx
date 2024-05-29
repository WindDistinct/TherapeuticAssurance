'use client';

import Link from "next/link";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import { FaAngleLeft } from "react-icons/fa";


export default function LoginPage() {

    const router = useRouter();

    const [user, setUser] = useState({
        email:'',
        password:'',
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('api/users/login', user);
            console.log('Ingreso exitoso', response.data);
            router.push("/profile");
        } catch (error) {
            console.log("Error al encontrar usuario: " + error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    console.log(user);

    return(
        <>
        <div>
            <h1>
                {loading ? 'Accediendo a la cuenta' : 'Inicio de sesión'}
            </h1>
            <br/>
            <br/>
            <input 
                    type="email" 
                    value={user.email} 
                    onChange={(e) => setUser({...user, email: e.target.value})} 
                    placeholder="Tu correo..."
            />
            <br/>
            <br/>
            <input 
                    type="password" 
                    value={user.password} 
                    onChange={(e) => setUser({...user, password: e.target.value})} 
                    placeholder="Tu contraseña..."
            />
            <br/>
            <br/>
            <button
                onClick={onLogin}>
                    {buttonDisabled ? 'Ingresa tus datos' : 'Iniciar sesión'}
            </button>
            <br/>
            <br/>
            <Link href={"/sign-up"}>
                <p>
                    Aún no tienes una cuenta?{' '}
                    <span>Crea una aquí</span>
                </p>
            </Link>
            <br/>
            <br/>
            <Link href={"/"}>
                <p>
                    <FaAngleLeft>Volver al inicio</FaAngleLeft>
                </p>
            </Link>
        </div>
        </>
    )
}