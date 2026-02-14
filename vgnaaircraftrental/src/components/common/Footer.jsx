import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">AirCraft Store</h3>
        <p className="footer-copyright">
          &copy; {currentYear} AirCraft Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;