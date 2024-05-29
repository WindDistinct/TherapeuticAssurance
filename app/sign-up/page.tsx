'use client';

import Link from "next/link";
import React, {useEffect} from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import { FaAngleLeft } from "react-icons/fa";

export default function SignUpPage() {
    const router = useRouter();

    const [user, setUser] = React.useState({
        username:'',
        email:'',
        password:''
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    const onSignUp = async () => {
        try {
            setLoading(true);

            const response = await axios.post('/api/users/signup',user);
            console.log("Registro correcto", response.data);
            router.push("/login");

        } catch (error:any) {
            console.log("Error al registrar usuario: " + error);
        } finally {
            setLoading(false);
        }
    } 

    useEffect(() => {
        if (
            user.username.length > 0 &&
            user.email.length > 0 &&
            user.password.length > 0 
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user])

    console.log(user);

    return(
        <>
            <div>
                <h1>
                    {loading ? 'Procesando...' : "Cree su cuenta"}
                </h1>
                <br/>

                <input 
                    type="text" 
                    value={user.username} 
                    onChange={(e) => setUser({...user, username: e.target.value})} 
                    placeholder="Tu usuario..."
                />
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
                <button onClick={onSignUp}>
                    {buttonDisabled ? 'Registrarse' : 'Registrarme ahora'}
                </button>
                <br/>
                <br/>
                <Link href={"/login"}>
                    <p>
                        Tienes una cuenta?{' '}
                        <span>Inicia sesión aquí</span>
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