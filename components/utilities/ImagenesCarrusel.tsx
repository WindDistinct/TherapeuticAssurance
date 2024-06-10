import React from 'react';
import Image from 'next/image';

interface ImagenesCarruselProps {
  src: string;
  alt: string;
}

const ImagenesCarrusel: React.FC<ImagenesCarruselProps> = ({ src, alt }) => {
  return (
    <Image
      className="w-100"
      src={src}
      alt={alt}
      width={900}
      height={900}  
      style={{ filter: 'brightness(0.9)', opacity: '0.7'}}
    />
  );
};

export default ImagenesCarrusel;
