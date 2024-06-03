'use client';

import Link from "next/link";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import { FaAngleLeft } from "react-icons/fa";
import LoginForm from "@/components/ui/LoginForm";


export default function LoginPage() {

    return(
        <>
        <div>
            <LoginForm/>
            <br/><br/>
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