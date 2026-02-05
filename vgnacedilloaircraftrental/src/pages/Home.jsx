import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import AircraftCard from '../components/aircraft/AircraftCard';
import { aircraftData } from '../data/aircraftData';

const Home = () => {
  const featuredAircraft = aircraftData.filter(aircraft => aircraft.featured);

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to AirCraft Store</h1>
        <p>Discover the finest collection of aircraft for sale</p>
      </section>
      
      <section className="featured-aircraft">
        <h2>Featured Aircraft</h2>
        <div className="aircraft-grid">
          {featuredAircraft.map(aircraft => (
            <AircraftCard key={aircraft.id} aircraft={aircraft} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
