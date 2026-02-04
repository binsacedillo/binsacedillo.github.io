import { useState } from 'react';
import { CartContext } from './cartContextValue';
import { cartService } from '../services/cartService';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => cartService.getCart());
  const [total, setTotal] = useState(() => {
    const items = cartService.getCart();
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  });

  const updateTotal = (items) => {
    const newTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotal(newTotal);
  };

  const addToCart = (product) => {
    const updated = cartService.addToCart(product);
    setCartItems(updated);
    updateTotal(updated);
  };

  const removeFromCart = (productId) => {
    const updated = cartService.removeFromCart(productId);
    setCartItems(updated);
    updateTotal(updated);
  };

  const updateQuantity = (productId, quantity) => {
    const updated = cartService.updateQuantity(productId, quantity);
    setCartItems(updated);
    updateTotal(updated);
  };

  const clearCart = () => {
    cartService.clearCart();
    setCartItems([]);
    setTotal(0);
  };

  const value = {
    cartItems,
    total,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
