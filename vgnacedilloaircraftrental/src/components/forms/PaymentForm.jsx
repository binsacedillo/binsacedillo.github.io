import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../common/Button';
import { useCart } from '../../hooks/useCart';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMode: 'credit',
    receipt: null
  });
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const { cartItems } = useCart();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save order details to localStorage for receipt
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    const order = {
      items: cartItems,
      subtotal,
      tax,
      total,
      payment: {
        mode: formData.paymentMode,
        ...(formData.paymentMode === 'credit' ? {
          cardName: formData.cardName,
          cardNumber: formData.cardNumber,
        } : {}),
        address: formData.address,
        city: formData.city,
        zipCode: formData.zipCode
      },
      date: new Date().toISOString()
    };
    localStorage.setItem('lastOrder', JSON.stringify(order));
    navigate('/transaction-confirmation');
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <h3>Payment Information</h3>
        <div className="form-group">
          <label htmlFor="paymentMode">Mode of Payment</label>
          <select
            id="paymentMode"
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleChange}
            required
          >
            <option value="credit">Credit/Debit Card</option>
            <option value="gcash">GCash</option>
            <option value="paypal">PayPal</option>
            <option value="bank">Bank Transfer</option>
          </select>
        </div>
        {formData.paymentMode === 'credit' && (
          <>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                required
                autoComplete="cc-number"
                inputMode="numeric"
                pattern="[0-9\\s]{13,23}"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Cardholder Name</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                autoComplete="cc-name"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  required
                  autoComplete="cc-exp"
                  inputMode="numeric"
                  pattern="\\d{2}/\\d{2}"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  required
                  autoComplete="cc-csc"
                  inputMode="numeric"
                  pattern="[0-9]{3,4}"
                />
              </div>
            </div>
          </>
        )}
        {(formData.paymentMode === 'gcash' || formData.paymentMode === 'bank') && (
          <div className="form-group">
            <label htmlFor="receipt">Upload Receipt (screenshot or PDF)</label>
            <input
              type="file"
              id="receipt"
              name="receipt"
              accept="image/*,application/pdf"
              onChange={handleChange}
              required
            />
          </div>
        )}
      </div>

      <div className="form-section">
        <h3>Delivery Address</h3>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main St"
            required
            autoComplete="street-address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="New York"
            required
            autoComplete="address-level2"
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">ZIP Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="10001"
            required
            autoComplete="postal-code"
            inputMode="numeric"
            pattern="[0-9]{5}(-[0-9]{4})?"
          />
        </div>
      </div>

      <Button type="submit">Complete Purchase</Button>
    </form>
  );
};

export default PaymentForm;
