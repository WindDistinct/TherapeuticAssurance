'use client';

import  { useCart } from "@/components/context/CartContext";
import axios from "axios";

export default function Carrito() {

    //Llama a los atributos del contexto
    const { cart, clearCart } = useCart();

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

    return (
        <div id="checkout">
            <h1 className="h-3 pb-5">Carrito de Compras</h1>
            <ol className="list-group check">
                {cart.map((item, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-start" key={index}>
                        <div className="ms-2 me-auto">
                            <div className="h4 fw-bold">{item.nombre}</div>
                            Precio: ${item.precio} - Total: ${item.total}
                        </div>
                        <span className="badge text-bg-primary rounded-pill">Cantidad: {item.cantidad}</span>
                    </li>
                ))}
            </ol>
            <p>Total: {total}</p>
            <button onClick={handleCheckout} className="btn btn-primary mt-5 position-relative top-50 start-50 translate-middle">Proceder al pago</button>
        </div>
    );
};