import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";

export default function LoginForm() {
    const router = useRouter();

    const [user, setUser] = useState({
        email:'',
        password:'',
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    const [error, setError] = React.useState('');

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('api/users/login', user);
            console.log('Ingreso exitoso', response.data);
            router.push("/profile");
        } catch (error) {
            console.log("Error al encontrar usuario: " + error);
            setError("La cuenta ingresada no existe, revise las credenciales");
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

    return(
        <>
            <h1 style={{ color: '#137090', fontWeight: 'bold' }}>
                {loading ? 'Accediendo a la cuenta' : 'Inicio de sesión'}
            </h1>
            <br/>
            <br/>
            <input 
                type="email" 
                value={user.email} 
                onChange={(e) => setUser({...user, email: e.target.value})} 
                placeholder="Ingrese su correo"
                className="input-custom"
            />
            <br/>
            <br/>
            <input 
                type="password" 
                value={user.password} 
                onChange={(e) => setUser({...user, password: e.target.value})} 
                placeholder="Ingrese su contraseña"
                className="input-custom"
            />
            <br/>
            <br/>
            <button onClick={onLogin} style={{ color: buttonDisabled ? 'red' : 'blue' }}>
                {buttonDisabled ? 'Ingrese tus datos para iniciar sesión' : 'Haga CLICK AQUÍ para Iniciar sesión'}
            </button>
            <br/>
            <br/>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </>
    );
}