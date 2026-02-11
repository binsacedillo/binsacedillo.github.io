import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../common/Button';
import { useCart } from '../../hooks/useCart';
import { aircraftData } from '../../data/aircraftData';

const AircraftDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const aircraft = aircraftData.find(a => a.id === parseInt(id));

  if (!aircraft) {
    return <div>Aircraft not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(aircraft);
  };

  return (
    <div className="aircraft-details">
      <div className="details-image">
        <img src={aircraft.image} alt={aircraft.name} />
      </div>
      <div className="details-info">
        <h1>{aircraft.name}</h1>
        <p className="price">${aircraft.price.toLocaleString()}</p>
        <p className="description">{aircraft.description}</p>
        <div className="specifications">
          <h3>Specifications</h3>
          {aircraft.specs && Object.entries(aircraft.specs).map(([key, value]) => (
            <p key={key}><strong>{key}:</strong> {value}</p>
          ))}
        </div>
        <Button onClick={handleAddToCart}>Request Quote</Button>
      </div>
    </div>
  );
};

export default AircraftDetails;
