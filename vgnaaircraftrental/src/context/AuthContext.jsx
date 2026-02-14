import React, { createContext, useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage } from '../utils/localStorage';

const AuthContext = createContext();

export { AuthContext };

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getFromLocalStorage('user'));
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!getFromLocalStorage('user'));

  const login = (email, password) => {
    try {
      if (!email || !password) {
        return { success: false, message: 'Email and password are required' };
      }

      const users = getFromLocalStorage('users') || [];
      const foundUser = users.find(u => u.email === email && u.password === password);
      
      if (foundUser) {
        const safeUser = { 
          id: foundUser.id || Date.now(),
          name: foundUser.name || '',
          email: foundUser.email,
          phone: foundUser.phone || '',
          address: foundUser.address || ''
        };
        setUser(safeUser);
        setIsAuthenticated(true);
        saveToLocalStorage('user', safeUser);
        return { success: true, user: safeUser };
      }
      
      return { success: false, message: 'Invalid email or password' };
    } catch (err) {
      console.error('Login error:', err);
      return { success: false, message: 'An error occurred during login' };
    }
  };

  const signup = (userData) => {
    try {
      const { name, email, password, phone, address } = userData;

      if (!name || !email || !password) {
        return { success: false, message: 'Name, email, and password are required' };
      }

      const users = getFromLocalStorage('users') || [];
      
      if (users.find(u => u.email === email)) {
        return { success: false, message: 'User with this email already exists' };
      }

      const newUser = { 
        id: Date.now(),
        name, 
        email, 
        password,
        phone: phone || '',
        address: address || '',
        createdAt: new Date().toISOString()
      };
      
      users.push(newUser);
      saveToLocalStorage('users', users);
      return { success: true, message: 'Account created successfully' };
    } catch (err) {
      console.error('Signup error:', err);
      return { success: false, message: 'An error occurred during signup' };
    }
  };

  const logout = () => {
    try {
      setUser(null);
      setIsAuthenticated(false);
      removeFromLocalStorage('user');
      return { success: true };
    } catch (err) {
      console.error('Logout error:', err);
      return { success: false, message: 'An error occurred during logout' };
    }
  };

  const value = {
    user,
    isAuthenticated,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
