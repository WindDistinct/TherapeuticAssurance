import React from 'react';
import Image from 'next/image';

interface ImagenesCarruselProps {
  src: string;
  alt: string;
}

const ImagenesCarrusel: React.FC<ImagenesCarruselProps> = ({ src, alt }) => {
  return (
    <Image
    className="d-block w-30"
    src={src}
    alt={alt}
    width={650}
    height={500}
    objectFit="contain"

  />
  );
};

export default ImagenesCarrusel;
