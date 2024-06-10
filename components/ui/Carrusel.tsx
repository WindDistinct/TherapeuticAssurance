'use client';

import React from 'react';
import {Carousel} from 'react-bootstrap'
import ImagenesCarrusel from '../utilities/ImagenesCarrusel';

const Carrusel: React.FC = () => {
  return (
    <div className='row'>

      <div className="col-12">

          <h1 className="text-primario fw-bolder" >Especialidades</h1>

          <div className="d-flex justify-content-center ">
            
            <Carousel className="w-100 contenedor-carrusel position-relative overflow-hidden">
              
              <Carousel.Item className="overflow-hidden">
              
                <ImagenesCarrusel  src="/images/20004.jpg"  alt="Pediatria" />
              
                <Carousel.Caption  className="position-absolute" style={{ top:'380px'}}>
              
                  <h3 className='h-3'>Pediatría</h3>
              
                </Carousel.Caption>
              
              </Carousel.Item>
              
              <Carousel.Item>
              
                <ImagenesCarrusel src="/images/20006.JPG"  alt="Pediatria" />
              
                <Carousel.Caption  className="position-absolute" style={{ top:'380px'}}>
              
                  <h3 className='h-3' >Dermatología</h3>
              
                </Carousel.Caption>
              
              </Carousel.Item>
              
              <Carousel.Item>
              
                <ImagenesCarrusel src="/images/20005.JPG"  alt="Cardiologia" />
              
                <Carousel.Caption className="position-absolute" style={{ top:'380px'}}>
              
                  <h3 className='h-3'>Cardiología</h3>
              
                </Carousel.Caption>
              
              </Carousel.Item>
              
              <Carousel.Item>
              
                <ImagenesCarrusel src="/images/20009.JPG"alt="Oftalmologia" />
              
                <Carousel.Caption className="position-absolute" style={{ top:'380px'}}>
              
                  <h3 className='h-3'>Oftamología</h3>
              
                </Carousel.Caption>
              
              </Carousel.Item>
              
              <Carousel.Item>
              
                <ImagenesCarrusel src="/images/2010.jpg"  alt="Quiropractico" />
              
                <Carousel.Caption className="position-absolute" style={{ top:'380px'}}>
              
                  <h3 className='h-3'>Quiropráctico</h3>
              
                </Carousel.Caption>
              
              </Carousel.Item>
              
              <Carousel.Item>
              
                <ImagenesCarrusel src="/images/20002.JPG"  alt="Psicologia" />
              
                <Carousel.Caption className="position-absolute" style={{ top:'380px'}}>
              
                  <h3 className='h-3'>Psicología</h3>
              
                </Carousel.Caption>
              
              </Carousel.Item>

              <Carousel.Item>
              
                <ImagenesCarrusel src="/images/20003.jpg"  alt="Ortopedia" />
              
                <Carousel.Caption className="position-absolute" style={{ top:'380px'}}>
              
                  <h3 className='h-3'>Ortopedia</h3>
              
                </Carousel.Caption>
              
              </Carousel.Item>

              <Carousel.Item>
              
                <ImagenesCarrusel src="/images/20007.jpg"  alt="Medicina General" />
              
                <Carousel.Caption className="position-absolute" style={{ top:'380px'}}>
              
                  <h3 className='h-3'>Medicina General</h3>
              
                </Carousel.Caption>
              
              </Carousel.Item>
            
            </Carousel>
           
          </div>
       
      </div>

    </div>
  );
};

export default Carrusel;