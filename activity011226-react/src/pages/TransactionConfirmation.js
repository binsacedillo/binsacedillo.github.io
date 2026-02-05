import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function TransactionConfirmation() {
  return (
    <div className="page">
      <div className="confirmation-container">
        <div className="confirmation-icon">✓</div>
        <h2>Transaction Confirmed!</h2>
        <p className="confirmation-message">
          Your aircraft rental reservation has been confirmed.
        </p>

        <div className="confirmation-details">
          <div className="detail-row">
            <span>Confirmation Number:</span>
            <span className="detail-value">SH-2024-001234</span>
          </div>
          <div className="detail-row">
            <span>Order Date:</span>
            <span className="detail-value">{new Date().toLocaleDateString()}</span>
          </div>
          <div className="detail-row">
            <span>Status:</span>
            <span className="detail-value confirmed">Confirmed</span>
          </div>
        </div>

        <div className="confirmation-message-box">
          <h3>What's Next?</h3>
          <ol>
            <li>You will receive a confirmation email shortly with all details</li>
            <li>Our team will contact you to confirm delivery arrangements</li>
            <li>Prepare the required documents for aircraft pickup</li>
            <li>Enjoy your aircraft rental experience!</li>
          </ol>
        </div>

        <div className="button-group">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/catalog" className="btn btn-secondary">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}

export default TransactionConfirmation;
