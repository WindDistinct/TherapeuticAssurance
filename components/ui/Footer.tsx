import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return (
        <>
            <footer className="text-light pt-4 overflow-hidden ">
                
                <div className="bg-primario  p-4">

                    <div className="container">
                        
                        <div className="row">

                            <div className="col-md-4">

                                <h3>Therapeutic Assurance</h3>

                                <p className='text-justify'>En Therapeutic Assurance nos preocupamos por el bienestar de nuestros clientes y les ofrecemos productos y servicios de la más alta calidad</p>

                            </div>

                            <div className='col-1'>

                            </div>

                            <div className="col-md-4">

                                <h5>Contacto</h5>

                                <address className=''>

                                    <p>
                                        <strong>Dirección</strong>
                                        <br/>
                                        Calle General Recavarren 596, Miraflores
                                        <br/>
                                        Perú
                                    </p>

                                    <strong>Email:</strong>
                                    <br/>
                                    info@therapueticassurance.com
                                    <br/>
                                    
                                    <br/>
                                    <strong>Teléfono:</strong>
                                    <br/>
                                    +51987151798
                                </address>
                            
                            </div>

                            <div className='col-1'></div>

                            <div className="col-md-2">

                                <h5>Enlaces</h5>

                                <ul className="list-unstyled">

                                    <li><a href="#" className='text-white'>Inicio</a></li>
                                    
                                    <li><a href="#" className='text-white'>Servicios</a></li>

                                    <li><a href="#" className='text-white'>Acerca de nosotros</a></li>
                                    
                                    <li><a href="#" className='text-white'>Contacto</a></li>
                                </ul>
                            </div>

                        </div>
                    
                    </div>
                    
                </div>

                <div className="bg-white row">

                        <div className="py-4 text-center text-dark d-flex justify-center items-center">

                            <p className='m-0'>&copy; 2024 TherapeuticAssurance. Todos los derechos reservados.</p>

                        </div>
                </div>
            </footer>
        </>
    )
}