'use client';

import  { useCart } from "@/components/context/CartContext";
import axios from "axios";

export default function Carrito() {

    //Llama a los atributos del contexto
    const { cart, clearCart , deleteProduct,updateUnits } = useCart();

    //Calcula el total
    const total = cart.reduce((acc, item) => acc + item.total, 0);

    //Obtiene los productos del contexto
    const handleCheckout = async () => {
        //Conversión de los datos a un objeto
        const products = cart.map(item => ({ productId: item.productId, 
                                                cantidad: item.cantidad, 
                                                precio: item.precio }));
        
        try {
            //Envio de los datos a la API
            await axios.post('/api/shop/orden', { products, total });
            clearCart();
        } catch (error:any) {
            console.error('Error al realizar la compra:', error);   
        }
    };

    console.log(cart);
    return (
        <div id="checkout">
            <h1 className="h-3 pb-5">Carrito de Compras</h1>
            <ol className="list-group check">
                {cart.map((item, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-start" key={index}>
                        <div className="ms-2 me-auto">
                            <div className="h4 fw-bold">{item.nombre}</div>
                            Precio: ${item.precio} - Total: ${(item.total).toFixed(5)}
                            <div className="mt-3">
                                <label htmlFor="">Cantidad</label>
                                <input 
                                            className="border w-100px bg-primary text-white text-center rounded ml-5" 
                                            type="number"
                                            value={item.cantidad}
                                            onChange={(e)=>{updateUnits(index,parseInt(e.target.value))}}
                                            min="1"
                                            step="1"
                                  />


                            </div>

                            
                        </div>
                       <div>

                            <button onClick={()=>{deleteProduct(index)}} className="btn btn-danger rounded-pill">X</button>
                          
                            
                       </div>
                    </li>
                ))}
            </ol>
            <p className="mt-5">Total: $ {total.toFixed(5)}</p>
            <button onClick={handleCheckout} className="btn btn-primary mt-5 position-relative top-50 start-50 translate-middle">Proceder al pago</button>
        </div>
    );
};