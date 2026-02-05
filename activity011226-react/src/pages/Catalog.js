import React from 'react';
import AircraftCard from '../components/AircraftCard';
import './Pages.css';

function Catalog({ addToCart }) {
  const allAircraft = [
    {
      id: 1,
      name: 'Cessna 172S',
      price: 8000,
      image: 'cessna172s.jpg',
      description: 'Perfect for training and personal use'
    },
    {
      id: 2,
      name: 'Beechcraft King Air',
      price: 18000,
      image: 'kingair.jpg',
      description: 'Ideal for business and charter flights'
    },
    {
      id: 3,
      name: 'Piper PA-44 Seminole',
      price: 12000,
      image: 'seminole.jpg',
      description: 'Twin-engine reliability and performance'
    },
    {
      id: 4,
      name: 'Diamond DA-40',
      price: 10000,
      image: 'da40.jpg',
      description: 'Modern design with excellent fuel efficiency'
    },
    {
      id: 5,
      name: 'Cessna 210',
      price: 14000,
      image: 'cessna210.jpg',
      description: 'High-performance single-engine aircraft'
    },
    {
      id: 6,
      name: 'Learjet 45',
      price: 45000,
      image: 'learjet45.jpg',
      description: 'Premium business jet for ultimate comfort'
    }
  ];

  return (
    <div className="page">
      <h2>Aircraft Catalog</h2>
      <p className="page-intro">Browse our complete fleet of aircraft for rent.</p>
      <section className="products">
        {allAircraft.map(aircraft => (
          <AircraftCard
            key={aircraft.id}
            aircraft={aircraft}
            onAddToCart={addToCart}
          />
        ))}
      </section>
    </div>
  );
}

export default Catalog;
