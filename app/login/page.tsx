'use client';

import Link from "next/link";
import React, {useEffect, useState} from "react";
import { FaAngleLeft } from "react-icons/fa";
import LoginForm from "@/components/ui/LoginForm";

export default function LoginPage() {

    return(
        <>
            <div>

                <LoginForm/>

            </div>
        </>
    )
}