import React from 'react';
import Button from '../common/Button';
import { useCart } from '../../hooks/useCart';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-info">
        <h3>{item.name}</h3>
        <p className="price">${item.price.toLocaleString()}</p>
      </div>
      <div className="item-quantity">
        <button onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
      </div>
      <div className="item-total">
        ${(item.price * item.quantity).toLocaleString()}
      </div>
      <Button variant="danger" onClick={handleRemove}>Remove</Button>
    </div>
  );
};

export default CartItem;
