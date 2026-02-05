import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const Profile = () => {
  const { user, logout, updateProfile, changePassword, loading } = useAuth();
  const navigate = useNavigate();
  
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    const result = updateProfile(profileData);
    if (result.success) {
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      setIsEditing(false);
    } else {
      setMessage({ type: 'error', text: result.message || 'Failed to update profile' });
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters long' });
      return;
    }

    const result = changePassword(passwordData.currentPassword, passwordData.newPassword);
    if (result.success) {
      setMessage({ type: 'success', text: 'Password changed successfully!' });
      setIsChangingPassword(false);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } else {
      setMessage({ type: 'error', text: result.message || 'Failed to change password' });
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setProfileData({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      address: user.address || ''
    });
    setMessage({ type: '', text: '' });
  };

  const handleCancelPassword = () => {
    setIsChangingPassword(false);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setMessage({ type: '', text: '' });
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h1>My Profile</h1>
        
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Profile Information Section */}
        <div className="profile-section">
          <div className="section-header">
            <h2>Profile Information</h2>
            {!isEditing && !isChangingPassword && (
              <Button onClick={() => setIsEditing(true)} variant="secondary">
                Edit Profile
              </Button>
            )}
          </div>

          {isEditing ? (
            <form onSubmit={handleUpdateProfile} className="profile-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profileData.name}
                  onChange={handleProfileChange}
                  disabled={loading}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  disabled={loading}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleProfileChange}
                  disabled={loading}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={profileData.address}
                  onChange={handleProfileChange}
                  disabled={loading}
                  placeholder="Enter your address"
                  rows="3"
                />
              </div>

              <div className="button-group">
                <Button type="submit" disabled={loading}>
                  {loading ? 'Saving...' : 'Save Changes'}
                </Button>
                <Button type="button" onClick={handleCancelEdit} variant="secondary" disabled={loading}>
                  Cancel
                </Button>
              </div>
            </form>
          ) : (
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
              {user.createdAt && (
                <div className="info-group">
                  <label>Member Since:</label>
                  <p>{new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Security Section */}
        {!isEditing && (
          <div className="profile-section">
            <div className="section-header">
              <h2>Security</h2>
              {!isChangingPassword && (
                <Button onClick={() => setIsChangingPassword(true)} variant="secondary">
                  Change Password
                </Button>
              )}
            </div>

            {isChangingPassword ? (
              <form onSubmit={handleChangePassword} className="profile-form">
                <div className="form-group">
                  <label htmlFor="currentPassword">Current Password *</label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    disabled={loading}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="newPassword">New Password *</label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    disabled={loading}
                    placeholder="Min 6 characters"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm New Password *</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    disabled={loading}
                    required
                  />
                </div>

                <div className="button-group">
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Changing...' : 'Change Password'}
                  </Button>
                  <Button type="button" onClick={handleCancelPassword} variant="secondary" disabled={loading}>
                    Cancel
                  </Button>
                </div>
              </form>
            ) : (
              <div className="profile-info">
                <div className="info-group">
                  <label>Password:</label>
                  <p>••••••••</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Actions Section */}
        {!isEditing && !isChangingPassword && (
          <div className="profile-actions">
            <Button onClick={handleLogout} variant="danger">
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
