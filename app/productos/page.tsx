import type { Metadata } from "next";
import Link from "next/link"

export default function contactanos() {

    return (  
        <>             
            <section id="seccion-productos">

                <div className="container mtop-6">
                    
                    <h3 className="h-3 margin-bottom-8">CATEGORÍAS</h3>
                    
                    <nav>
                    
                        <Link href="http://localhost:3000/productos" >All</Link>
                    
                        <Link href="http://localhost:3000/productos?categorie=jarabe" className="pr-6">Jarabes</Link>
                    
                        <Link href="http://localhost:3000/productos?categorie=pastilla"  className="pr-6">Pastillas</Link>
                    
                        <Link href="http://localhost:3000/productos?categorie=belleza"  className="pr-6">Belleza</Link>
                    
                    </nav>

                    <div className="row margin-bottom-8" id="contenedor-productos">

                        <div className="card col-12 col-sm-6 col-lg-4 mbottom-6"  >
                                                        
                            <img src="https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/011592X.jpg" className="card-img-top" alt="Producto" />
            
                            <ul className="list-group list-group-flush my-2">
                            
                                <li className="list-group-item" >Pastillas</li>
                            
                                <li className="list-group-item fs-6">Pastillas A1</li>
                            
                                <li className="list-group-item fs-4" >S/180.00</li>
                            
                            </ul>

                            <div className="card-body d-flex justify-content-center">
                                    
                                <button type="button" className="btn btn-dark btn-agregar-al-carrito" id="1" >
                                    
                                    AÑADIR AL CARRITO
                                    
                                </button>

                            </div>

                        </div>
                    
                        <div className="card col-12 col-sm-6 col-lg-4 mbottom-6"  >
                                                        
                            <img src="https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/011592X.jpg" className="card-img-top" alt="Producto" />
            
                            <ul className="list-group list-group-flush my-2">
                            
                                <li className="list-group-item" >Pastillas</li>
        
                                <li className="list-group-item fs-6">Pastillas A1</li>
                
                                <li className="list-group-item fs-4" >S/180.00</li>
                            
                            </ul>

                            <div className="card-body d-flex justify-content-center">
                        
                                <button type="button" className="btn btn-dark btn-agregar-al-carrito" id="1" >
                                    
                                    AÑADIR AL CARRITO
                                    
                                </button>
                    
                            </div>
                            
                        </div>

                        <div className="card col-12 col-sm-6 col-lg-4 mbottom-6"  >                                                
                                
                            <img src="https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/011592X.jpg" className="card-img-top" alt="Producto" />
            
                            <ul className="list-group list-group-flush my-2">
                                    
                                <li className="list-group-item" >Pastillas</li>
                                    
                                <li className="list-group-item fs-6">Pastillas A1</li>
                                    
                                <li className="list-group-item fs-4" >S/180.00</li>
                                
                            </ul>

                            <div className="card-body d-flex justify-content-center">

                                <button type="button" className="btn btn-dark btn-agregar-al-carrito" id="1" >
                                        
                                    AÑADIR AL CARRITO
                                        
                                </button>
            
                            </div>
                                
                        </div>

                        <div className="card col-12 col-sm-6 col-lg-4 mbottom-6"  >
                                                                            
                            <img src="https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/011592X.jpg" className="card-img-top" alt="Producto" />
                                
                            <ul className="list-group list-group-flush my-2">
                                
                                <li className="list-group-item" >Pastillas</li>
                                
                                <li className="list-group-item fs-6">Pastillas A1</li>
                                
                                <li className="list-group-item fs-4" >S/180.00</li>
                                
                            </ul>

                            <div className="card-body d-flex justify-content-center">

                                <button type="button" className="btn btn-dark btn-agregar-al-carrito" id="1" >
                                        
                                    AÑADIR AL CARRITO
                                    
                                </button>
                                
                            </div>

                        </div>

                        <div className="card col-12 col-sm-6 col-lg-4 mbottom-6"  >
                                                                            
                            <img src="https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/011592X.jpg" className="card-img-top" alt="Producto" />
                                
                            <ul className="list-group list-group-flush my-2">

                                <li className="list-group-item" >Pastillas</li>

                                <li className="list-group-item fs-6">Pastillas A1</li>

                                <li className="list-group-item fs-4" >S/180.00</li>

                            </ul>

                            <div className="card-body d-flex justify-content-center">

                                <button type="button" className="btn btn-dark btn-agregar-al-carrito" id="1" >
                                    
                                    AÑADIR AL CARRITO
                                        
                                </button>

                            </div>

                        </div>

                        <div className="card col-12 col-sm-6 col-lg-4 mbottom-6"  >
                                                                            
                            <img src="https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/011592X.jpg" className="card-img-top" alt="Producto" />
                                
                            <ul className="list-group list-group-flush my-2">
                            
                                <li className="list-group-item" >Pastillas</li>
                            
                                <li className="list-group-item fs-6">Pastillas A1</li>
                            
                                <li className="list-group-item fs-4" >S/180.00</li>
                            
                            </ul>

                            <div className="card-body d-flex justify-content-center">
                            
                                <button type="button" className="btn btn-dark btn-agregar-al-carrito" id="1" >
                                        
                                    AÑADIR AL CARRITO
                                        
                                </button>
                            
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className="margin-bottom-8 d-flex justify-content-center">
                        
                        <button id="ver-mas"  type="button" className="btn btn-agregar-al-carrito">
                                
                            VER MÁS
                            
                        </button>
                    </div>
                </div>
            </section>                                        
        </>      
    );
}
  