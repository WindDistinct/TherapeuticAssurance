import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

export default function SignUpForm() {
    
    const router = useRouter();

    const [user, setUser] = React.useState({
        username:'',
        email:'',
        password:''
    });

    const [confirmPassword, setConfirmPassword] = React.useState('');

    const [error, setError] = React.useState('');


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
            setError("El usuario ya existe")
        } finally {
            setLoading(false);
        }
    }

    
    const syncPassword = async (e:any) => {
        if (user.password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
        } else {
            setError("");
            onSignUp();
        }
    };

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
    
    return (
        <>
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
            <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                placeholder="Confirmar contraseña..."
            />
            <br/>
            <br/>
            <button onClick={syncPassword}>
                {buttonDisabled ? 'Registrarse' : 'Registrarme ahora'}
            </button>
            <br/>
            <br/>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </>
    );
}