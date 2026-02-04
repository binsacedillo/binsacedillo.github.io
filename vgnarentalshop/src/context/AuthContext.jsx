import { useState } from 'react';
import { AuthContext } from './authContextValue';
import { authService } from '../services/authService';

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => authService.isLoggedIn());
  const [user, setUser] = useState(() => 
    authService.isLoggedIn() ? authService.getUser() : null
  );

  const login = (userData) => {
    authService.setLoggedIn(true);
    authService.setUser(userData);
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    authService.logout();
    setIsLoggedIn(false);
    setUser(null);
  };

  const value = {
    isLoggedIn,
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
