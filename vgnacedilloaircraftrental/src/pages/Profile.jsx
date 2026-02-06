import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h1>My Profile</h1>
        <div className="profile-section">
          <h2>Profile Information</h2>
          <div className="profile-info">
            <div className="info-group">
              <label>Name:</label>
              <p>{user.name}</p>
            </div>
            <div className="info-group">
              <label>Email:</label>
              <p>{user.email}</p>
            </div>
            <div className="info-group">
              <label>Phone:</label>
              <p>{user.phone || 'Not provided'}</p>
            </div>
            <div className="info-group">
              <label>Address:</label>
              <p>{user.address || 'Not provided'}</p>
            </div>
          </div>
        </div>
        <div className="profile-actions">
          <Button onClick={handleLogout} variant="danger">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
