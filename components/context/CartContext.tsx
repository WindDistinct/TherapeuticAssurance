'use client';

import { createContext, ReactNode, useContext, useState } from "react";

interface CartProduct {
    productId: string;
    nombre: string;
    precio: number;
    cantidad: number;
}

interface CartContextProps {
    cart: CartProduct[];
    addToCart: (productId: string, nombre: string, precio: number, cantidad: number) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartProduct[]>([]);

    const addToCart = (productId: string, nombre: string, precio: number, cantidad: number) => {
        setCart([...cart, { productId, nombre, precio, cantidad }]);
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
