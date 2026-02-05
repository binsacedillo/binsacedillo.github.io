import React, { createContext, useState, useEffect } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const CartContext = createContext();

export { CartContext };

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => getFromLocalStorage('cart') || []);

  useEffect(() => {
    saveToLocalStorage('cart', cartItems);
  }, [cartItems]);

  const addToCart = (aircraft) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === aircraft.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === aircraft.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { ...aircraft, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}
