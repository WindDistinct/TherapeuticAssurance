'use client';

import Link from "next/link";
import React, {useEffect} from "react";
import { FaAngleLeft } from "react-icons/fa";
import SignUpForm from "@/components/ui/SignUpForm";

export default function SignUpPage() {

    return(
        <>
            <div>
                <SignUpForm/>
                <br/><br/>
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