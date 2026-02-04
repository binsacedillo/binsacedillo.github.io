import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import '../styles/forms.css';

export default function PaymentDelivery() {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate('/confirmation');
  };

  return (
    <>
      <h2>Payment & Delivery</h2>
      <div className="auth-container">
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cartItems.map(item => (
            <div key={item.id} style={{marginBottom: '10px'}}>
              <p><strong>{item.name}</strong> x {item.quantity}</p>
              <p>${(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}
          <h4>Total: ${total.toLocaleString()}</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <h3>Payment Information</h3>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="cardName">Cardholder Name:</label>
            <input type="text" id="cardName" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiry">Expiry Date:</label>
              <input type="text" id="expiry" placeholder="MM/YY" required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" maxLength="3" required />
            </div>
          </div>

          <h3>Delivery Address</h3>
          <div className="form-group">
            <label htmlFor="address">Street Address:</label>
            <input type="text" id="address" required />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input type="text" id="state" required />
            </div>
            <div className="form-group">
              <label htmlFor="zip">ZIP Code:</label>
              <input type="text" id="zip" required />
            </div>
          </div>

          <button type="submit" className="btn-primary">Complete Order</button>
        </form>
      </div>
    </>
  );
}
