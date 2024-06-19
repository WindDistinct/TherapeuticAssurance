import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from '@/app/login/page';

const Presentacion: React.FC = () => {
  	return (
		<>
			<div>

				<div  className='row margin-bottom-8'>

					<div  className="col-6">

						<div>

							<h1 className="text-primario fw-bolder">
								Hacemos tu tratamiento médico simple.
							</h1>

						</div>

						<div className="row">

							<p className="col-12 text-justify">
								En <span className="fw-bold ">Therapeutic Assurance</span>, nos dedicamos a simplificar tu experiencia de
								atención médica, proporcionándote soluciones efectivas y personalizadas
								para tus necesidades de salud. Con un equipo de expertos en medicina,
								incluyendo oftalmólogos, quiroprácticos, psicólogos y más, estamos aquí
								para guiarte en cada paso del camino.
							</p>

						</div>

						<div className="row">

							<div className="col-6">

								<div className="card" >

									<img  id="icono" src="https://st3.depositphotos.com/1177973/14011/i/450/depositphotos_140115622-stock-photo-various-products-on-shelves-at.jpg" className="w-100 card-img-top " alt="..." />

									<div className="card-body">
										
										<h5 className="card-title">Productos</h5>
										
										<a href="/productos" className="btn btn-primary">

											<i className="fa-regular fa-eye pr-2"></i>

											Ver Productos

											</a>

									</div>

								</div>
							
							</div>

							<div className="col-6">
								
								<div className="card" >

									<img  id="icono" src="https://ipn.pe/wp-content/uploads/2015/12/consultas-medicas2.jpg" className="w-100 card-img-top " alt="..." />

									<div className="card-body">

										<h5 className="card-title">Consultas Médicas</h5>
										
										<a href="#" className="btn btn-primary">
										
											<i className="fa-regular fa-eye pr-2"></i>
										
											Ver Consultas
										
										</a>

									</div>

								</div>

							</div>

						</div>

					</div>

					<div className="col-1"></div>
				
					<div id="login" className="col-5 card px-5 py-4 border-radius-20 col-5 text-center d-flex justify-content-center align-items-center">
					
						<LoginPage/>

					</div>
				</div>
			</div>
		</>
	);
};

export default Presentacion;