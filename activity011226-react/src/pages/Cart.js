import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="page">
        <h2>Shopping Cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/catalog" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Shopping Cart</h2>
      <div className="cart-table">
        <table>
          <thead>
            <tr>
              <th>Aircraft</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>₱{item.price.toLocaleString()}/hr</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>₱{total.toLocaleString()}</span>
        </div>
        <div className="summary-row">
          <span>Tax (12%):</span>
          <span>₱{Math.round(total * 0.12).toLocaleString()}</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>₱{Math.round(total * 1.12).toLocaleString()}</span>
        </div>
        <Link to="/payment-delivery" className="btn btn-primary full-width">
          Proceed to Payment
        </Link>
      </div>
    </div>
  );
}

export default Cart;
