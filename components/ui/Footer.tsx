import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return (
        <>
        <footer className="bg-dark text-light py-4">
            
            <div className="Container p-4">

                <div className="row">

                    <div className="col-md-4">

                        <h5>Therapeutic Assurance</h5>

                        <p>En Therapeutic Assurance nos preocupamos por el bienestar de nuestros clientes y les ofrecemos productos y servicios de la más alta calidad</p>

                    </div>

                    <div className="col-md-4">

                        <h5>Enlaces</h5>

                        <ul className="list-unstyled">

                            <li><a href="#">Inicio</a></li>
                            
                            <li><a href="#">Servicios</a></li>

                            <li><a href="#">Acerca de nosotros</a></li>
                            
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4">

                        <h5>Contacto</h5>

                        <address>
                            <strong>Dirección</strong><br/>
                            Calle General Recavarren 596, Miraflores<br/>
                            Perú<br/>
                            <br/>
                            <strong>Email:</strong><br/>
                            info@therapueticassurance.com<br/>
                            <br/>
                            <strong>Teléfono:</strong><br/>
                            +51987151798
                        </address>
                    </div>
                </div>
                <div className="row">

                    <div className="col text-center">

                        <p>&copy; 2024 TherapeuticAssurance. Todos los derechos reservados.</p>

                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}