import React from 'react';
import PaymentForm from '../components/forms/PaymentForm';
import CartSummary from '../components/cart/CartSummary';

const PaymentDelivery = () => {
  return (
    <div className="payment-delivery-page">
      <h1>Payment & Delivery</h1>
      <div className="payment-layout">
        <PaymentForm />
      </div>
    </div>
  );
};

export default PaymentDelivery;
