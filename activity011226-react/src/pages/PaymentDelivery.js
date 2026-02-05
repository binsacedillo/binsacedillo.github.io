import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

function PaymentDelivery({ cartItems }) {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    method: 'credit-card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    deliveryDate: '',
    deliveryLocation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment data:', paymentData);
    // Simulate payment processing
    alert('Payment processed successfully!');
    navigate('/transaction-confirmation');
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = Math.round(total * 0.12);
  const finalTotal = total + tax;

  return (
    <div className="page">
      <h2>Payment & Delivery</h2>
      <div className="payment-container">
        <div className="payment-form">
          <form onSubmit={handleSubmit}>
            <h3>Delivery Details</h3>
            <div className="form-group">
              <label htmlFor="deliveryDate">Delivery Date *</label>
              <input
                type="date"
                id="deliveryDate"
                name="deliveryDate"
                value={paymentData.deliveryDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="deliveryLocation">Delivery Location *</label>
              <input
                type="text"
                id="deliveryLocation"
                name="deliveryLocation"
                value={paymentData.deliveryLocation}
                onChange={handleChange}
                required
                placeholder="Where should we deliver the aircraft?"
              />
            </div>

            <h3>Payment Method</h3>
            <div className="form-group">
              <label htmlFor="method">Select Payment Method *</label>
              <select
                id="method"
                name="method"
                value={paymentData.method}
                onChange={handleChange}
                required
              >
                <option value="credit-card">Credit Card</option>
                <option value="debit-card">Debit Card</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>

            {paymentData.method !== 'bank-transfer' && (
              <>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number *</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date *</label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={paymentData.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cvv">CVV *</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={paymentData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <button type="submit" className="btn btn-primary full-width">
              Complete Payment
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cartItems.map((item, index) => (
              <div key={index} className="summary-item">
                <span>{item.name}</span>
                <span>₱{item.price.toLocaleString()}/hr</span>
              </div>
            ))}
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₱{total.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Tax (12%):</span>
            <span>₱{tax.toLocaleString()}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>₱{finalTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDelivery;
