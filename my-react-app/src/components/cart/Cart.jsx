import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { useCart } from '../../hooks/useCart';

const Cart = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Add some aircraft to get started!</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CartSummary />
    </div>
  );
};

export default Cart;
