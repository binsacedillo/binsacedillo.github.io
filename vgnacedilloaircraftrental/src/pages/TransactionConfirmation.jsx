import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { useCart } from '../hooks/useCart';

const TransactionConfirmation = () => {
  const { clearCart } = useCart();

  React.useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="confirmation-page">
      <div className="confirmation-content">
        <h1>✓ Order Confirmed!</h1>
        <p>Thank you for your purchase. Your order has been successfully processed.</p>
        <p>You will receive an email confirmation shortly.</p>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default TransactionConfirmation;
