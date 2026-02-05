import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ cartCount, isLoggedIn }) {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>SkyHigh Rentals</h1>
        </Link>
        <nav className="header-nav">
          <Link to="/cart" className="cart-link">
            Cart ({cartCount})
          </Link>
          {isLoggedIn ? (
            <Link to="/profile" className="profile-link">
              Profile
            </Link>
          ) : (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
