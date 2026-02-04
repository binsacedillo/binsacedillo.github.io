import { useState } from 'react';

export default function TransactionConfirmation() {
  const [orderId] = useState(() => 
    Math.random().toString(36).substr(2, 9).toUpperCase()
  );
  const [orderDate] = useState(() => 
    new Date().toLocaleDateString()
  );

  return (
    <>
      <h2>Order Confirmation</h2>
      <div style={{ 
        backgroundColor: '#e8f5e9', 
        padding: '24px', 
        borderRadius: '8px', 
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <h3>Thank you for your order!</h3>
        <p>Your order has been successfully processed.</p>
      </div>

      <div className="receipt" style={{
        backgroundColor: '#f5f7fa',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h4>Order Details</h4>
        <p><strong>Order ID:</strong> {orderId}</p>
        <p><strong>Date:</strong> {orderDate}</p>
        <p><strong>Status:</strong> Confirmed</p>
        <p><strong>Estimated Delivery:</strong> 3-5 business days</p>
        
        <h4>What's Next?</h4>
        <ul>
          <li>You will receive a confirmation email shortly</li>
          <li>Our team will contact you to finalize rental details</li>
          <li>Aircraft will be ready for pickup at the scheduled time</li>
          <li>Pre-flight inspection and safety briefing included</li>
        </ul>

        <h4>Customer Support</h4>
        <p>
          If you have any questions, please contact us:<br/>
          Email: info@skyhighrentals.com<br/>
          Phone: 123-456-7890
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <a href="/" style={{
          display: 'inline-block',
          backgroundColor: '#2196f3',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Return to Home
        </a>
      </div>
    </>
  );
}
