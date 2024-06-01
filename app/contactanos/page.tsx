import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
    title: "Therapeutic Assurance",
    description: "Tratamientos especializados por profesionales dedicados"
};
  
export default function contactanos() {

    return (  
    <>
    <Header/>
    <br/><br/><br/><br/>
    <section id="seccion-quienes-somos" className="mtop-6">


        <div className="container ">

            <h2 className=" fs-1 mbottom-6">Contáctanos</h2>


            <div className="row " >


                <div className="col-12 h-20">

                    <p>ACÁ IRÁ EL FORMULARIO DE CONTACTO</p>


                </div>
            </div>
        </div>
        </section>
        <Footer/>                     
        </>
          );
  }
  