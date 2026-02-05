import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { useCart } from '../../hooks/useCart';

const CartSummary = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckout = () => {
    navigate('/payment-delivery');
  };

  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>
      <div className="summary-row">
        <span>Subtotal:</span>
        <span>${subtotal.toLocaleString()}</span>
      </div>
      <div className="summary-row">
        <span>Tax (10%):</span>
        <span>${tax.toLocaleString()}</span>
      </div>
      <div className="summary-row total">
        <span>Total:</span>
        <span>${total.toLocaleString()}</span>
      </div>
      <Button onClick={handleCheckout}>Proceed to Checkout</Button>
    </div>
  );
};

export default CartSummary;
