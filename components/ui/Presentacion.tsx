import Image from "next/image"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from '@/app/login/page';

const Presentacion: React.FC = () => {
  return <div>
    <div id="presentacion" className='row'>
        <div id="hola" className="col-6">
            <div  ><h1 style={{ color: '#187ac9', fontWeight: 'bold' }}>Hacemos tu tratamiento médico simple.</h1></div>
			<div className="row"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat.</p></div>
            <div className="row">
				<div className="col-6">
					<div className="row"><img id="icono" src="/images/kit.png"></img></div>
					<div className="row"><h2 style={{ color: '#137090'}} >Productos</h2></div>
				</div>
				<div className="col-6">
					<div className="row"><img id="icono" src="/images/kit.png"></img></div>
					<div className="row"><h2 style={{ color: '#137090'}} >Consultas Médicas</h2></div>
				</div>
			</div>
        </div>


        <div id="loginn" className="col-6 text-center d-flex justify-content-center align-items-center">
            <LoginPage />
        </div>
    </div>
  </div>;
};

export default Presentacion;