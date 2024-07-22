'use client';

import { createContext, ReactNode, useContext, useState } from "react";

//Estructura del producto en el carro
interface CartProduct {
    productId: string;
    nombre: string;
    precio: number;
    cantidad: number;
    total: number
}

//Estructura del contexto del carro
interface CartContextProps {
    cart: CartProduct[];
    addToCart: (productId: string, nombre: string, precio: number, cantidad: number) => void;
    clearCart: () => void;
};

//Se crea el contexto que almacenará el estado del carro, inicializado como indefinido
export const CartContext = createContext<CartContextProps | undefined>(undefined);

//Se crea el proveedor para emplear el contexto en toda la app
export const CartProvider = ({ children }: { children: ReactNode }) => {
    
    const [cart, setCart] = useState<CartProduct[]>([]);

    const addToCart = (productId: string, nombre: string, precio: number, cantidad: number) => {
        //Establece el nuevo valor del carro
        setCart(prevCart => {
            //Busca si existe el producto añadido
            const existingProductIndex = prevCart.findIndex(product => product.productId === productId);
            
            //Si existe
            if (existingProductIndex >= 0) {
                //Da el valor preexistente
                const updatedCart = [...prevCart];
                //Añade la nueva cantidad y calcula el precio
                updatedCart[existingProductIndex] = {
                    ...updatedCart[existingProductIndex],
                    cantidad: updatedCart[existingProductIndex].cantidad + cantidad,
                    total: updatedCart[existingProductIndex].total + (precio * cantidad),
                };
                return updatedCart;
            //Si no existe
            } else {
                //Añade el producto
                return [...prevCart, { productId, nombre, precio, cantidad, total: precio * cantidad }];
            }
        });
    };

    //Limpia el carro
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
};

//Se crea el hook para su uso dentro de la app
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart debe ser usado dentro de CartProvider');
    }
    return context;
};
