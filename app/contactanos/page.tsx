import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Therapeutic Assurance",
    description: "Tratamientos especializados por profesionales dedicados"
};
  
export default function contactanos() {

    return (  
        <>   
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
                       
        </>
    );
}