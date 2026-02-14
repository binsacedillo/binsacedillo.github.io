import AircraftCard from '../components/aircraft/AircraftCard';
import { aircraftData } from '../data/aircraftData';

const Home = () => {
  const featuredAircraft = aircraftData.filter(aircraft => aircraft.featured);

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to AirCraft Rental</h1>
        <p>Discover the finest collection of aircraft for rental</p>
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
