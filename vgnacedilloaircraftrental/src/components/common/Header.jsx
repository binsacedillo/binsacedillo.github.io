import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { cartItems } = useCart();
  const location = useLocation();

  const cartItemCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span className="logo-text">AirCraft Store</span>
        </Link>

        {/* Navigation */}
        <nav className="nav">
          <div className="nav-links">
            <Link
              to="/"
              className={`nav-link ${isActivePath('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/catalog"
              className={`nav-link ${isActivePath('/catalog') ? 'active' : ''}`}
            >
              Catalog
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActivePath('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActivePath('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </div>

          <div className="nav-actions">
            <Link
              to="/cart"
              className="cart-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="cart-text">Cart</span>
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="user-menu">
                <Link
                  to="/profile"
                  className="user-link"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{user?.name || 'Profile'}</span>
                </Link>
                <button
                  onClick={logout}
                  className="logout-btn"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-links">
                <Link
                  to="/login"
                  className="login-link"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="signup-link"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
