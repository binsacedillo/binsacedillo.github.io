import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { useCart } from '../../hooks/useCart';

const AircraftCard = ({ aircraft }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(aircraft);
  };

  return (
    <div className="aircraft-card">
      <img src={aircraft.image} alt={aircraft.name} />
      <h3>{aircraft.name}</h3>
      <p className="price">${aircraft.price.toLocaleString()}</p>
      <p className="description">{aircraft.description}</p>
      <div className="card-actions">
        <Button variant="secondary" to={`/aircraft/${aircraft.id}`}>View Details</Button>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default AircraftCard;
