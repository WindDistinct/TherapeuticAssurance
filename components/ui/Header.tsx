import Link from "next/link"
import { Image } from "react-bootstrap";
import { FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import ButtonLogOff from "./ButtonLogOff";


export default function Header(){

    return(
                <>
                    <header  className="border-t-4 border-red-600 shadow-md bg-white margin-bottom-15"> 

                        <div className="contenedor  flex justify-between  height-7">

                            <Link href="/" >
                                <Image src="/images/logo.png" alt="Logo" className="" />
                            </Link>

                            <nav className="flex justify-items-center items-center  gap-x-6">

                                <Link href="/ " className="text-black fw-normal link-custom ">                                    
                                        INICIO                                
                                </Link>
                                    
                                <Link href="/nosotros" className="text-black fw-normal link-custom">                                    
                                    NOSOTROS                              
                                </Link>

                                <Link href="/productos" className="text-black fw-normal link-custom">
                                    CATALOGO                                
                                </Link> 


                                <Link href="/contactanos" className="text-black fw-normal link-custom">                                    
                                    CONTÁCTANOS                                
                                </Link>

                                <Link className="text-black fw-normal link-custom flex items-center gap-x-1" href="https://api.whatsapp.com/send?phone=51914740170&text=Hola%20%2C%20deseo%20realizar%20una%20reserva%20" target="_blank">  
                                    <FaWhatsapp className="text-2xl"/> ( +51) 914-74-01-70
                                </Link>

                                <Link href="/checkout" className="text-black fw-normal link-custom flex items-center gap-x-1">
                                <FaShoppingCart className="text-2xl" />    CARRITO                                
                                </Link>

                                <ButtonLogOff/>
                            </nav>
                        </div>
                    </header>
                </>
          )
}