import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

const NavigationSidebar = () => {
  const { isAuthenticated, logout } = useAuth();
  const { cartItems } = useCart();
  const location = useLocation();
  const isOpen = true;

  const cartItemCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/catalog', label: 'Catalog', icon: '✈️' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
    { path: '/contact', label: 'Contact', icon: '📧' },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside className={`nav-sidebar ${isOpen ? 'open' : 'closed'}`}>
        {/* Sidebar Header with Logo */}
        <div className="nav-sidebar-header">
          <Link to="/" className="nav-sidebar-logo">
            <svg className="nav-logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className="nav-logo-text">AirCraft Store</span>
          </Link>

        </div>

        {/* Navigation Links */}
        <nav className="nav-sidebar-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-sidebar-link ${isActivePath(item.path) ? 'active' : ''}`}
              title={item.label}
            >
              <span className="nav-link-icon">{item.icon}</span>
              <span className="nav-link-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Cart Link */}
        <div className="nav-sidebar-actions">
          <Link
            to="/cart"
            className={`nav-sidebar-link cart-link ${isActivePath('/cart') ? 'active' : ''}`}
            title="Cart"
          >
            <span className="nav-link-icon">🛒</span>
            <span className="nav-link-label">Cart</span>
            {cartItemCount > 0 && (
              <span className="nav-cart-badge">{cartItemCount}</span>
            )}
          </Link>
        </div>

        {/* User Menu */}
        <div className="nav-sidebar-user">
          {isAuthenticated ? (
            <>
              <Link
                to="/profile"
                className={`nav-sidebar-link ${isActivePath('/profile') ? 'active' : ''}`}
                title="Profile"
              >
                <span className="nav-link-icon">👤</span>
                <span className="nav-link-label">Profile</span>
              </Link>
              <button
                className="nav-logout-btn"
                onClick={logout}
                title="Logout"
              >
                <span className="nav-link-icon">🚪</span>
                <span className="nav-link-label">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`nav-sidebar-link ${isActivePath('/login') ? 'active' : ''}`}
                title="Login"
              >
                <span className="nav-link-icon">🔓</span>
                <span className="nav-link-label">Login</span>
              </Link>
              <Link
                to="/signup"
                className={`nav-sidebar-link ${isActivePath('/signup') ? 'active' : ''}`}
                title="Sign Up"
              >
                <span className="nav-link-icon">✍️</span>
                <span className="nav-link-label">Sign Up</span>
              </Link>
            </>
          )}
        </div>
      </aside>

    </>
  );
};

export default NavigationSidebar;
