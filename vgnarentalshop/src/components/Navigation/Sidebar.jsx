import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "../../styles/layout.css";

export function Sidebar() {
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();

  const isActive = (path) => {
    return location.pathname === path ? 'active-nav' : '';
  };

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/catalog" className={isActive('/catalog')}>Catalog</Link></li>
          <li><Link to="/cart" className={isActive('/cart')}>Cart</Link></li>
          <li><Link to="/about" className={isActive('/about')}>About Us</Link></li>
          <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
          {isLoggedIn ? (
            <>
              <li><Link to="/profile" className={isActive('/profile')}>Profile</Link></li>
              <li><button onClick={logout} style={{width: '100%', cursor: 'pointer'}}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className={isActive('/login')}>Login</Link></li>
              <li><Link to="/signup" className={isActive('/signup')}>Signup</Link></li>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
}
