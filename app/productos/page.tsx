'use client';

import { useCart } from '@/components/context/CartContext';
import axios from 'axios';
import Link from 'next/dist/client/link';
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';

//Estructurar los datos para su uso en el navegador
export interface Product {
  _id: string;
  nombre: string;
  imagen: string;
  precio: number;
  categoria: string;
  unidades: number;
}

export default function Catalogo() {


  const [products, setProducts] = useState<Product[]>([]);

  const [category, setCategory] = useState<string | null>(null);

  //Actualizar el contexto
  const { addToCart } = useCart();

  //Obtener los productos de la base de datos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //Se envía el requerimiento con la categoría buscada
        const response = await axios.get('/api/shop/productos', {
          params: {
            categoria: category
          }
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error recuperando los productos:', error);
      }
    };

    fetchProducts();
    
  }, [category]);
  

  const actualizarUnidadesAPedir = (id: string, unidades: string)=>
    {

        const updateProducts = [...products]

        for(let i=0 ; i<updateProducts.length ; i++)
          {

              if(updateProducts[i]._id == id)
                {
                    updateProducts[i].unidades = Number.parseInt(unidades);
                }

          }
          console.log(updateProducts);

          setProducts(updateProducts);

    }



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
                    <p className="mt-3">
                    <label htmlFor="">Cantidad</label>
                    <input 
                                className="border w-100px bg-primary text-white text-center rounded ml-5" 
                                type="number"
                                value={!product.unidades ? 1 : product.unidades}
                                onChange={(e)=>{actualizarUnidadesAPedir(product._id, e.target.value ) }}
                                min="1"
                                step="1"
                      />


                    </p>
                    <span onClick={() => addToCart(product._id, product.nombre, product.precio, !product.unidades ? 1 : product.unidades)} className="btn btn-primary">
                      Añadir al carrito
                    </span>
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
