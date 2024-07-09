import type { Metadata } from "next";
import Link from 'next/dist/client/link';
import productos from "./productosData";
import ProductosProps from "./ProductosProps";


export default function contactanos() {


    return (  
        <>             
        <section id="seccion-productos">
        <div className="container mtop-6">
          <h3 className="h-3 margin-bottom-8">CATEGORÍAS</h3>
          <nav>
            <Link href="/productos" className="mr-3">All</Link>
            <Link href="/productos/jarabe" className="mr-3">Jarabes</Link>
            <Link href="/productos/pastilla" className="mr-3">Pastillas</Link>
            <Link href="/productos/belleza" className="mr-3">Belleza</Link>
          </nav>
          <div className="row margin-bottom-8 mt-5" id="contenedor-productos">
            {productos.map((producto) => (
              <ProductosProps key={producto.id} producto={producto} />
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
