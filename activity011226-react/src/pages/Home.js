import React from 'react';
import AircraftCard from '../components/AircraftCard';
import './Pages.css';

function Home({ addToCart }) {
  const featuredAircraft = [
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
    }
  ];

  return (
    <div className="page">
      <h2>Featured Aircraft</h2>
      <p className="page-intro">Explore our premium fleet of aircraft available for rental.</p>
      <section className="products">
        {featuredAircraft.map(aircraft => (
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

export default Home;
