'use client';

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function LoginForm() {
    const router = useRouter();

    const [user, setUser] = useState({
        email:'',
        password:'',
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    const [error, setError] = React.useState('');

    const regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [mailSubmitted, mailIsSubmitted] = React.useState(false);
    const [passSubmitted, passIsSubmitted] = React.useState(false);

    const onEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUser({...user, email : e.target.value})
        mailIsSubmitted(true);
    };
    
    const onPassChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUser({...user, password : e.target.value})
        passIsSubmitted(true);
    };

    const onLogin = async () => {
        try {
            setLoading(true);
            axios.post('api/users/login', user);
            console.log('Ingreso exitoso');
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
            <Form onSubmit={onLogin} className=" row g-3">

                <h1 className="text-primario fw-bolder">
                    {loading ? 'Accediendo a la cuenta' : 'Inicio de sesión'}
                </h1>

                <div className="col-12 mt-5">

                    <div className="input-group has-validation">

                        <span className="input-group-text" id="inputGroupPrepend3">

                            <i className="fa-solid fa-user"></i>

                        </span>

                        <input 
                                type="email" 
                                value={user.email} 
                                onChange={onEmailChange} 
                                placeholder="Tu Usuario"
                                className={`form-control ${mailSubmitted ? ((regexEmail.test(user.email)) ? "is-valid" : "is-invalid") : "" }`}
                                id="validationServerUsername" 
                                aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                                required 
                        />

                        <div className="valid-feedback"></div>

                        {mailSubmitted && !regexEmail.test(user.email) && (
                            <div id="validationServerUsernameFeedback" className="invalid-feedback">
            
                                Por favor Ingrese su usuario.
            
                            </div>
                        )}
        
                    </div>
                </div>

                <div className="col-12 mt-4">

                    <div className="input-group has-validation">
                        
                        <span className="input-group-text" id="inputGroupPrepend4">
                        
                            <i className="fa-solid fa-lock"></i>
                        
                        </span>
                        
                        <input 
                                type="password" 
                                value={user.password} 
                                onChange={onPassChange} 
                                placeholder="Tu Password"

                                className={`form-control ${passSubmitted ? ((user.password.length>0) ? "is-valid" : "is-invalid") : "" }`}
                                id="validationServerPassword"
                                aria-describedby="inputGroupPrepend3 validationServerPasswordFeedback" required
                        />
                        
                        {passSubmitted && user.password.length === 0 && (
                             <div id="validationServerPasswordFeedback" className="invalid-feedback">

                                Por favor Ingrese su Contraseña.
 
                            </div>
                        )}
                       

                    </div>

                </div>

                <div className="col-12">

                    <Button className={`mt-3 btn btn-primary border-0 text-white ${buttonDisabled ? 'bg-danger' : 'blue'}`} type="submit">

                        {buttonDisabled ? 'Ingrese sus credenciales' : 'Iniciar Sesión'}
            
                    </Button>
                    
                </div>
                <br/>
                <br/>
                {error && <p className="btn btn-danger" >{error}</p>}
            </Form>    
            <Link className="d-block mt-3" href={"/sign-up"}>
                Aún no tienes una cuenta?{' '}
                <span>Crea una aquí</span>
            </Link>
            <Link className="d-block mt-2" href={"/sign-up"}>
                Olvidaste tu contraseña?{' '}
                <span>Recuperala aquí</span>
            </Link>
        </>
    );
}