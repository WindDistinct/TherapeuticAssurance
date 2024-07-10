'use client';

import { createContext, ReactNode, useContext, useState } from "react";

interface CartProduct {
    productId: string;
    nombre: string;
    precio: number;
    cantidad: number;
    total: number
}

interface CartContextProps {
    cart: CartProduct[];
    addToCart: (productId: string, nombre: string, precio:number, cantidad: number) => void;
    clearCart: () => void;
};

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartProduct[]>([]);

    const addToCart = (productId: string, nombre: string, precio: number, cantidad: number) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(product => product.productId === productId);
            if (existingProductIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex] = {
                    ...updatedCart[existingProductIndex],
                    cantidad: updatedCart[existingProductIndex].cantidad + cantidad,
                    total: updatedCart[existingProductIndex].total + (precio * cantidad),
                };
                console.log(cart);
                return updatedCart;
            } else {
                console.log(cart);
                return [...prevCart, { productId, nombre, precio, cantidad, total: precio * cantidad }];
            }
        });
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart debe ser usado dentro de CartProvider');
    }
    return context;
};
