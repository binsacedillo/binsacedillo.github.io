import React from 'react';
import AircraftCatalog from '../components/aircraft/AircraftCatalog';
import { aircraftData } from '../data/aircraftData';

const Catalog = () => {
  return (
    <div className="catalog-page">
      <h1>Aircraft Catalog</h1>
      <AircraftCatalog aircrafts={aircraftData} />
    </div>
  );
};

export default Catalog;
