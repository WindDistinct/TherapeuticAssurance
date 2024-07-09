import React from 'react';
import productos from './productosData';
import ProductosProps from './ProductosProps';



const Jarabe: React.FC = () => {
  // Filtrar los productos de categoría "jarabe"
  const productosJarabe = productos.filter((producto) => producto.categoria === 'jarabe');

  return (
    <div className="container">
      <h3 className="h-3">Productos de Jarabe</h3>
      <div className="row">
        {productosJarabe.map((producto) => (
          <ProductosProps key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Jarabe;