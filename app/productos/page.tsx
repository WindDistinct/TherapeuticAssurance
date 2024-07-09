'use client';

import { useCart } from '@/components/context/CartContext';
import axios from 'axios';
import Link from 'next/dist/client/link';
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';


export interface Product {
  _id: string;
  nombre: string;
  imagen: string;
  precio: number;
  categoria: string;
}

export default function Catalogo() {

  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/shop/productos', {
          params: {
            categoria: category
          }
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [category]);
  
  return (  
      <>             
      <section id="seccion-productos">
      <div className="container mtop-6">
        <h3 className="h-3 margin-bottom-8">CATEGORÍAS</h3>
        <nav>
          <Link href="#" onClick={() => setCategory(null)} className="mr-3">All</Link>
          <Link href="#" onClick={() => setCategory('jarabe')} className="mr-3">Jarabes</Link>
          <Link href="#" onClick={() => setCategory('pastilla')} className="mr-3">Pastillas</Link>
          <Link href="#" onClick={() => setCategory('belleza')} className="mr-3">Belleza</Link>
        </nav>
        <div className="row margin-bottom-8 mt-5" id="contenedor-productos">
          {products.map(product => (
            <div key={product._id} className="col-md-4 mb-4">
              <div className="card">
                <Image src={product.imagen} className="card-img-top" alt={product.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{product.nombre}</h5>
                  <p className="card-text">Precio: {product.precio}</p>
                  <p className="card-text">Categoría: {product.categoria}</p>
                  <a href="#" onClick={() => addToCart(product._id, product.nombre, product.precio, 1)} className="btn btn-primary">
                    Añadir al carrito
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="margin-bottom-8 d-flex justify-content-center">
          <button id="ver-mas" type="button" className="btn btn-agregar-al-carrito">
            VER MÁS
          </button>
        </div>
      </div>
    </section>                        
      </>      
  );
}
