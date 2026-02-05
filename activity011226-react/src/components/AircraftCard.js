import React from 'react';
import './AircraftCard.css';

function AircraftCard({ aircraft, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={`/images/${aircraft.image}`} alt={aircraft.name} />
      </div>
      <div className="product-info">
        <h3>{aircraft.name}</h3>
        <p className="product-description">{aircraft.description}</p>
        <p className="product-price">₱{aircraft.price.toLocaleString()}/hr</p>
        <div className="product-actions">
          <button className="btn btn-primary" onClick={() => onAddToCart(aircraft)}>
            Add to Cart
          </button>
          <button className="btn btn-secondary">View Details</button>
        </div>
      </div>
    </article>
  );
}

export default AircraftCard;
