import ContactForm from "@/components/ui/ContactForm";
import type { Metadata } from "next";
import { Container } from "react-bootstrap";

export const metadata: Metadata = {
    title: "Therapeutic Assurance",
    description: "Tratamientos especializados por profesionales dedicados"
};
  
export default function contactanos() {

    return (  
        <>   
            <section className="mtop-6 position-relative">

                <Container className="my-5">

                    <div id="contacto" className="mx-auto p-2">

                        <h2>Contáctanos</h2>

                    </div>

                    <div className="col-12">

                        <ContactForm/>

                    </div>
                
                </Container>
            
            </section>
                       
        </>
    );
}