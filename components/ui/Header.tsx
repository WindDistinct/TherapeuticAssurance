import Image from 'next/image';
import Link from "next/link"
import ReactDOM from 'react-dom'
import { FaWhatsapp } from "react-icons/fa";

export default function Header(){

    return(
                <>
                    <header id="enlaces" className="border-t-4 border-red-600 shadow-md">                    
                        <div className="contenedor  flex justify-between  h-20">
                            <Link href="/">
                                <img src="/images/logo.png" alt="Logo" className="" />
                            </Link>
                            <nav className="flex justify-items-center items-center  gap-x-6">
                                <Link 
                                        href="/nosotros"
                                >                                    
                                    INICIO                                
                                </Link>
                                <Link 
                                        href="/productos"
                                >
                                NUESTROS PRODUCTO                                
                                </Link> 
                                <Link 
                                        href="/contactanos"
                                >                                    
                                    CONTÁCTANOS                                
                                </Link>
                                <Link                                     
                                    className="flex items-center gap-x-1"
                                    href="/ruta"
                                >                       
                                    < FaWhatsapp  className="text-2xl" /> ( +51) 914-74-01-70
                                </Link>
                            </nav>
                        </div>
                    </header>
                </>
          )
}