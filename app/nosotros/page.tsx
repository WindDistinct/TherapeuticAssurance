import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";


export const metadata: Metadata = {
    title: "Therapeutic Assurance",
    description: "Tratamientos especializados por profesionales dedicados"
};

export default function nosotros() {

    return (
  
                <>
                   <Header/>
                   <br/><br/><br/><br/><br/>
    <section id="seccion-quienes-somos" className="mtop-6">


        <div className="container ">

            <h2 className=" fs-1 mbottom-6" style={{ color: '#137090'}}>NOSOTROS</h2>


            <div className="row " >

                <div className="col-12 col-sm-6 col-lg-6" id="quienes-somos">
                </div>


                <div className="col-12 col-sm-6 col-lg-6 pleft-6"  > 
                                                            
                    <h3 style={{ color: '#115369'}} >¿QUIÉNES SOMOS?</h3>
                    <p className="text-justify">

                        Somos una <span className="font-semibold">empresa farmacéutica</span> comprometida con la salud y
                        el bienestar de nuestros clientes. Nos enorgullece ofrecer
                        una amplia gama de productos farmacéuticos de alta calidad
                        y servicios de salud accesibles para satisfacer las necesidades
                        de nuestra comunidad

                    </p>
                    
                    
                    <p className="text-justify"> <span className="font-semibold">Innovación:</span> Estamos constantemente buscando nuevas formas de mejorar y sorprender a nuestros clientes.</p>    
                    <p className="text-justify"> <span className="font-semibold">Comunidad:</span> Valoramos a nuestros clientes y colaboradores como parte de nuestra familia GENTLEMEN.</p>    

                </div>
            
            </div>

        </div>

        </section>

        <section id="seccion-a-que-nos-dedicamos" className="mtop-7">

        <div className="container ">

            <div className="row " >

                <div className="col-12 col-sm-6 col-lg-6 pright-6"   >
                                                            
                    <h3 style={{ color: '#115369'}}>¿A QUÉ SE DEDICA LA EMPRESA?</h3>
                
                    <p className="text-justify">
                        <span className="font-semibold">Importación y Comercialización :</span> 
                         En  Pharmaceuticals nos especializamos en la importación y 
                        comercialización de productos farmacéuticos de alta calidad, 
                        provenientes de laboratorios reconocidos a nivel internacional
                    </p>
                    
                    <p className="text-justify">
                    <span className="font-semibold">Salud y Bienestar: </span> 
                        En Pharmaceuticals, nuestro objetivo es promover el bienestar 
                        y la calidad de vida de nuestros clientes. Trabajamos con un equipo de
                        profesionales altamente calificados para garantizar que nuestros 
                        productos cumplan con las necesidades de salud de nuestros clientes,
                        brindando confianza y tranquilidad en cada compra.


                    </p>

                </div>

                <div className="col-12 col-sm-6 col-lg-6" id="a-que-se-dedica-la-empresa" >
                    
                </div>
         
            </div>
        </div>

        </section>


        <section id="mision-y-vision" className="mtop-7">


        <div className="container ">

        


            <div className="row " >

                <div className="pr-60 col-12 col-sm-6 col-lg-6  pright-6"  >
                                                            
                    <h3 className="" style={{ color: '#115369'}}>MISIÓN</h3>
                
                    <p className="tj ">
                        En [Nombre de la Farmacia], nos comprometemos a proporcionar
                        acceso conveniente y seguro a una amplia gama de medicamentos
                        y productos de salud de calidad para nuestros clientes.
                        Nos esforzamos por ofrecer un servicio excepcional,
                        brindando opciones accesibles y entregando productos de manera 
                        oportuna, garantizando así la satisfacción y el bienestar de quienes
                        confían en nosotros para sus necesidades de salud.
                    </p>
                

                </div>


                <div className="col-12 col-sm-6 col-lg-6  pleft-6"  >
                                                            
                    <h3 style={{ color: '#115369'}}>VISIÓN</h3>
                
                    <p className="tj ">

                        Nos visualizamos como líderes en el sector de la salud en línea,
                        siendo reconocidos por nuestra excelencia en servicio al cliente,
                        nuestra integridad en la calidad de los productos ofrecidos y
                        nuestra contribución a mejorar la salud y el bienestar de las 
                        comunidades a las que servimos. Buscamos continuamente innovar
                        y expandir nuestros servicios para llegar a más personas,
                        asegurando que todos tengan acceso fácil y seguro a los
                        medicamentos y productos necesarios para una vida saludable.

                    </p>   

                </div>

            </div>

        </div>

        </section>
                    <Footer/>

                </>
              
  
  
          );
  }
  