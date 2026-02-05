import React from 'react';
import './Pages.css';

function About() {
  return (
    <div className="page">
      <h2>About Us</h2>
      <div className="content">
        <section className="section">
          <h3>Our Mission</h3>
          <p>
            At SkyHigh Rentals, we are committed to providing world-class aircraft rental services with 
            exceptional customer care and competitive pricing.
          </p>
        </section>

        <section className="section">
          <h3>Who We Are</h3>
          <p>
            Founded with a passion for aviation, SkyHigh Rentals has been serving the aviation community 
            for over a decade. Our fleet of well-maintained aircraft and experienced team ensure safe and 
            enjoyable flights for all our clients.
          </p>
        </section>

        <section className="section">
          <h3>Our Fleet</h3>
          <p>
            We maintain a diverse fleet of aircraft ranging from single-engine trainer aircraft to 
            multi-engine business jets, suitable for various aviation needs and skill levels.
          </p>
        </section>

        <section className="section">
          <h3>Safety First</h3>
          <p>
            Safety is our top priority. All our aircraft undergo rigorous maintenance schedules, and 
            our pilots and staff are certified and regularly trained to the highest standards.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
