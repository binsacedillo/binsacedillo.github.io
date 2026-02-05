import React from 'react';
import AircraftCard from './AircraftCard';

const AircraftCatalog = ({ aircrafts }) => {
  return (
    <div className="aircraft-catalog">
      <div className="catalog-grid">
        {aircrafts.map((aircraft) => (
          <AircraftCard key={aircraft.id} aircraft={aircraft} />
        ))}
      </div>
    </div>
  );
};

export default AircraftCatalog;
