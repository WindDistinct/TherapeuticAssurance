'use client';

import React from 'react';
import {Carousel} from 'react-bootstrap'
import ImagenesCarrusel from '../utilities/ImagenesCarrusel';

const Carrusel: React.FC = () => {
  return (
    <div>
      <h1 className="subtitulo" >Especialidades</h1>
      <div className="d-flex justify-content-center contenedor-carrusel">
      <Carousel style={{ width: '40%' }}>
        <Carousel.Item>
          <ImagenesCarrusel src="/images/20004.jpg"  alt="Pediatria" />
          <Carousel.Caption>
            <h3 style={{ color: 'black' , fontSize: '50px' }}>Pediatría</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImagenesCarrusel src="/images/20006.JPG"  alt="Pediatria" />
          <Carousel.Caption>
            <h3 style={{ color: 'black' , fontSize: '50px'}}>Dermatología</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImagenesCarrusel src="/images/20005.JPG"  alt="Cardiologia" />
          <Carousel.Caption>
            <h3 style={{ color: 'black' , fontSize: '50px' }}>Cardiología</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImagenesCarrusel src="/images/20009.JPG"alt="Oftalmologia" />
          <Carousel.Caption>
            <h3 style={{ color: 'black' , fontSize: '50px' }}>Oftamología</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImagenesCarrusel src="/images/2010.jpg"  alt="Quiropractico" />
          <Carousel.Caption>
            <h3 style={{ color: 'black' , fontSize: '50px' }}>Quiropráctico</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImagenesCarrusel src="/images/20002.JPG"  alt="Psicologia" />
          <Carousel.Caption>
            <h3 style={{color: 'black' , fontSize: '50px' }}>Psicología</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ImagenesCarrusel src="/images/20003.jpg"  alt="Ortopedia" />
          <Carousel.Caption>
            <h3 style={{ color: 'black' , fontSize: '50px' }}>Ortopedia</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ImagenesCarrusel src="/images/20007.jpg"  alt="Medicina General" />
          <Carousel.Caption>
            <h3 style={{ color: 'black' , fontSize: '50px'}}>Medicina General</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
};

export default Carrusel;
