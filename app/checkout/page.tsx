'use client';


import  { useCart } from "@/components/context/CartContext";
import axios from "axios";

export default function Carrito() {
    const { cart, clearCart } = useCart();

    const handleCheckout = async () => {
        const products = cart.map(item => ({ productId: item.productId, cantidad: item.cantidad, precio: item.precio }));
        const total = cart.reduce((acc, item) => acc + item.total, 0); // Calcula el total

        try {
            await axios.post('/api/shop/orden', { products, total });
            clearCart();
            alert('Compra realizada con éxito');
        } catch (error) {
            console.error('Error al realizar la compra:', error);
            alert('Hubo un error al realizar la compra');
        }
    };

    return (
        <div>
            <h1>Carrito de Compras</h1>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.nombre} - Cantidad: {item.cantidad} - Precio: ${item.precio} - Total: ${item.total}
                    </li>
                ))}
            </ul>
            <button onClick={handleCheckout}>Proceder al pago</button>
        </div>
    );
};