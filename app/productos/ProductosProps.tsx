import React from 'react';
import { Producto } from '../productos/productosData'; 

interface ProductosProps {
  producto: Producto; 
}

const ProductosProps: React.FC<ProductosProps> = ({ producto }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">Precio: {producto.precio}</p>
          <p className="card-text">Categoría: {producto.categoria}</p>
          <a href="#" className="btn btn-primary">
            Ver detalles
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductosProps;