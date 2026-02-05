import React, { createContext, useState, useEffect } from 'react';
import { getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage } from '../utils/localStorage';

const AuthContext = createContext();

export { AuthContext };

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getFromLocalStorage('user'));
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!getFromLocalStorage('user'));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Clear error after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const login = (email, password) => {
    try {
      setLoading(true);
      setError(null);

      // Validate input
      if (!email || !password) {
        setError('Email and password are required');
        setLoading(false);
        return { success: false, message: 'Email and password are required' };
      }

      // In a real app, this would call an API
      const users = getFromLocalStorage('users') || [];
      const foundUser = users.find(u => u.email === email && u.password === password);
      
      if (foundUser) {
        const userWithoutPassword = { 
          id: foundUser.id || Date.now(),
          name: foundUser.name, 
          email: foundUser.email,
          phone: foundUser.phone || '',
          address: foundUser.address || '',
          createdAt: foundUser.createdAt || new Date().toISOString()
        };
        setUser(userWithoutPassword);
        setIsAuthenticated(true);
        saveToLocalStorage('user', userWithoutPassword);
        setLoading(false);
        return { success: true, user: userWithoutPassword };
      }
      
      setError('Invalid email or password');
      setLoading(false);
      return { success: false, message: 'Invalid email or password' };
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login');
      setLoading(false);
      return { success: false, message: 'An error occurred during login' };
    }
  };

  const signup = (userData) => {
    try {
      setLoading(true);
      setError(null);

      const { name, email, password, phone, address } = userData;

      // Validate input
      if (!name || !email || !password) {
        setError('Name, email, and password are required');
        setLoading(false);
        return { success: false, message: 'Name, email, and password are required' };
      }

      const users = getFromLocalStorage('users') || [];
      
      // Check if user already exists
      if (users.find(u => u.email === email)) {
        setError('User with this email already exists');
        setLoading(false);
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
      setLoading(false);
      return { success: true, message: 'Account created successfully' };
    } catch (err) {
      console.error('Signup error:', err);
      setError('An error occurred during signup');
      setLoading(false);
      return { success: false, message: 'An error occurred during signup' };
    }
  };

  const logout = () => {
    try {
      setUser(null);
      setIsAuthenticated(false);
      removeFromLocalStorage('user');
      setError(null);
      return { success: true };
    } catch (err) {
      console.error('Logout error:', err);
      setError('An error occurred during logout');
      return { success: false, message: 'An error occurred during logout' };
    }
  };

  const updateProfile = (updatedData) => {
    try {
      setLoading(true);
      setError(null);

      if (!user) {
        setError('No user logged in');
        setLoading(false);
        return { success: false, message: 'No user logged in' };
      }

      // Update user profile
      const updatedUser = { ...user, ...updatedData };
      setUser(updatedUser);
      saveToLocalStorage('user', updatedUser);

      // Update in users array if email is being changed
      const users = getFromLocalStorage('users') || [];
      const userIndex = users.findIndex(u => u.email === user.email);
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedData };
        saveToLocalStorage('users', users);
      }

      setLoading(false);
      return { success: true, user: updatedUser };
    } catch (err) {
      console.error('Update profile error:', err);
      setError('An error occurred while updating profile');
      setLoading(false);
      return { success: false, message: 'An error occurred while updating profile' };
    }
  };

  const changePassword = (currentPassword, newPassword) => {
    try {
      setLoading(true);
      setError(null);

      if (!user) {
        setError('No user logged in');
        setLoading(false);
        return { success: false, message: 'No user logged in' };
      }

      const users = getFromLocalStorage('users') || [];
      const userIndex = users.findIndex(u => u.email === user.email && u.password === currentPassword);

      if (userIndex === -1) {
        setError('Current password is incorrect');
        setLoading(false);
        return { success: false, message: 'Current password is incorrect' };
      }

      users[userIndex].password = newPassword;
      saveToLocalStorage('users', users);
      setLoading(false);
      return { success: true, message: 'Password changed successfully' };
    } catch (err) {
      console.error('Change password error:', err);
      setError('An error occurred while changing password');
      setLoading(false);
      return { success: false, message: 'An error occurred while changing password' };
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    signup,
    logout,
    updateProfile,
    changePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
