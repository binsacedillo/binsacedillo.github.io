
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { useCart } from '../hooks/useCart';

const TransactionConfirmation = () => {
  const { clearCart } = useCart();
  const [order, setOrder] = React.useState(null);

  React.useEffect(() => {
    // Get order details from localStorage
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      setOrder(JSON.parse(lastOrder));
    }
    clearCart();
  }, [clearCart]);

  if (!order) {
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
  }

  return (
    <div className="confirmation-page">
      <div className="confirmation-content">
        <h1>✓ Order Confirmed!</h1>
        <p>Thank you for your purchase. Your order has been successfully processed.</p>
        <h2>E-Receipt</h2>
        <div className="receipt-section">
          <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
          <h3>Items Purchased:</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {order.items.map(item => (
              <li key={item.id}>
                {item.name} x{item.quantity} @ ${item.price.toLocaleString()} each = <strong>${(item.price * item.quantity).toLocaleString()}</strong>
              </li>
            ))}
          </ul>
          <div className="summary-row"><span>Subtotal:</span> <span>${order.subtotal.toLocaleString()}</span></div>
          <div className="summary-row"><span>Tax (10%):</span> <span>${order.tax.toLocaleString()}</span></div>
          <div className="summary-row total"><span>Total:</span> <span>${order.total.toLocaleString()}</span></div>
          <h3>Payment & Delivery Info</h3>
          <div className="receipt-info">
            <div><strong>Payment Mode:</strong> {order.payment.mode}</div>
            {order.payment.cardName && <div><strong>Cardholder Name:</strong> {order.payment.cardName}</div>}
            {order.payment.cardNumber && <div><strong>Card Number:</strong> **** **** **** {order.payment.cardNumber.slice(-4)}</div>}
            <div><strong>Address:</strong> {order.payment.address}, {order.payment.city}, {order.payment.zipCode}</div>
          </div>
        </div>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default TransactionConfirmation;
