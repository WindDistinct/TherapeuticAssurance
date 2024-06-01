'use client';

import React from 'react';
import {Carousel} from 'react-bootstrap'
import ImagenesCarrusel from '../utilities/ImagenesCarrusel';

const Carrusel: React.FC = () => {
  return (
    <div>
      <h2>Especialidades</h2>
      <Carousel>
        <Carousel.Item>
          <ImagenesCarrusel src="https://centromedicoabc.com/storage/2022/12/pediatria.jpg" alt="Pediatria" />
          <Carousel.Caption>
            <h3 style={{ color: 'blue' }}>Pediatria</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImagenesCarrusel src="https://www.clinicamadrezoraida.com.pe/wp-content/uploads/2021/07/3.jpg" alt="Cardiologia" />
          <Carousel.Caption>
            <h3 style={{ color: 'blue' }}>Cardiologia</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImagenesCarrusel src="https://aio-oftalmologia.com/wp-content/uploads/De-que-se-ocupa-un-oftalmologo.jpg" alt="Oftalmologia" />
          <Carousel.Caption>
            <h3 style={{ color: 'blue' }}>Oftamologia</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImagenesCarrusel src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jKnwuKhvC5hdrQkeNab5dm2e3Z1ixhHZzfwANLy3sreIv7VLwz4Sud7h_RYTu7Aa5L0&usqp=CAU" alt="Quiropractico" />
          <Carousel.Caption>
            <h3 style={{ color: 'blue' }}>Quiropractico</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImagenesCarrusel src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJdkaR9YXIJzTUwVzmNBX9fP4ZWgQyBUr6cJk53aHN3L2sVmxk8Vq8XT6uYRvHGzS6qw&usqp=CAU" alt="Psicologia" />
          <Carousel.Caption>
            <h3 style={{ color: 'blue' }}>Psicologia</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImagenesCarrusel src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVNBB7LuF3ZNxYxoMaLAp3QEJcI_ThTFtiiq8GQ9F-1IYT-x5mYD87BApePKRn-00f6M&usqp=CAU" alt="Fisioterapia" />
          <Carousel.Caption>
            <h3 style={{ color: 'blue' }}>Fisioterapia</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImagenesCarrusel src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJuoruYefoUXTQMW7iz83mGmFQaDVPUJjUjUW-FbF5zdxCLVFiXXOY-Rqc6ExATFHJoQ&usqp=CAU" alt="Ortopedia" />
          <Carousel.Caption>
            <h3 style={{ color: 'blue' }}>Ortopedia</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImagenesCarrusel src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjm-9uV9QDVCYYMVyVzdXx4eVcOYI0frbhIw7d8vXfLxiN01eSD5mCdc9ToQi8ZJHNPU&usqp=CAU" alt="Neumologia" />
          <Carousel.Caption>
            <h3 style={{ color: 'blue' }}>Neumologia</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImagenesCarrusel src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDleZcrOZx2LEfsC_e64N9XKwJ5a1Hju6rFCGe5zUN-VHpBP3VewRi1OcMKa6j9XQaik&usqp=CAU" alt="Medicina General" />
          <Carousel.Caption>
            <h3 style={{ color: 'blue' }}>Medicina General</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrusel;
