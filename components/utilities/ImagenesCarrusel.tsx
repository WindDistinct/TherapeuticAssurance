import React from 'react';
import Image from 'next/image';

interface ImagenesCarruselProps {
  src: string;
  alt: string;
}

const ImagenesCarrusel: React.FC<ImagenesCarruselProps> = ({ src, alt }) => {
  return (
    <Image
    className="d-block w-100"
    src={src}
    alt={alt}
    width={600}
    height={436}
    objectFit="contain"
  />
  );
};

export default ImagenesCarrusel;
