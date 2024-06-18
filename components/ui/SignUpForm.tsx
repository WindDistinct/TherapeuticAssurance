import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { Container, Form, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

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
        <div  className="contenedorNuevoForm " >
            <Form style={{margin:'130px'}}>
                <Row>
                <h1 className="mb-4 text-center tituloNuevoForm" >
                {loading ? 'Procesando...' : "Cree su cuenta"}
                 </h1>
                <Form.Group  style={{ paddingBottom: '50px' }}>
                    <Form.Label className="subNuevoForm">Usuario</Form.Label>
                    <Form.Control
                    type="text" 
                    value={user.username} 
                    onChange={(e) => setUser({...user, username: e.target.value})} 
                    placeholder="Ingrese su usuario"
                    >
                    </Form.Control>
                 </Form.Group>    

            <br/>
                 <Form.Group style={{ paddingBottom: '50px' }}>
                    <Form.Label className="subNuevoForm">Correo</Form.Label>
                    <Form.Control
                    type="email" 
                    value={user.email} 
                    onChange={(e) => setUser({...user, email: e.target.value})} 
                    placeholder="Ingrese su correo"
                    >
                    </Form.Control>
                </Form.Group>  
            <br/>
                <Form.Group style={{ paddingBottom: '50px' }}>
                        <Form.Label className="subNuevoForm">Contraseña</Form.Label>
                        <Form.Control
                        type="password" 
                        value={user.password} 
                        onChange={(e) => setUser({...user, password: e.target.value})} 
                        placeholder="Ingrese su contraseña"
                        >
                        </Form.Control>
                </Form.Group>  
            <br/>
                <Form.Group style={{ paddingBottom: '50px' }}>
                            <Form.Label className="subNuevoForm">Confirmar Contraseña</Form.Label>
                            <Form.Control
                            type="password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            placeholder="Confirmar contraseña ingresada"
                            >
                            </Form.Control>
                </Form.Group>  
            <br/>
            <br/>
            <button onClick={syncPassword}
                    className={`botonNuevoForm mx-auto ${buttonDisabled ? 'disabled' : ''}`}
                    disabled={buttonDisabled}
            >
            
                {buttonDisabled ? 'Ingrese sus datos para registrarse' : 'Registrarme ahora'}
            </button>
            <br/>
            <br/>
            {error && <p className="mt-3 text-center" style={{ color: 'red' }}>{error}</p>}
            <Link className="espacio" href="/ "> Volver a la pagina de Inicio </Link>      
                </Row>
            </Form>
        </div>
    </>
    );
}