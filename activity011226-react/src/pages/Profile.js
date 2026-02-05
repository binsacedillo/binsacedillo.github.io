import React, { useState } from 'react';
import './Pages.css';

function Profile({ user }) {
  const [profileData, setProfileData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john@example.com',
    phone: '+63-123-456-7890',
    address: '123 Main Street, Metro Manila',
    licenseNumber: 'AVR-2024-001'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="page">
      <h2>User Profile</h2>
      <div className="profile-container">
        <section className="profile-section">
          <h3>Personal Information</h3>
          {isEditing ? (
            <div className="profile-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={profileData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="button-group">
                <button className="btn btn-primary" onClick={handleSave}>Save Changes</button>
                <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            </div>
          ) : (
            <div className="profile-display">
              <p><strong>Name:</strong> {profileData.name}</p>
              <p><strong>Email:</strong> {profileData.email}</p>
              <p><strong>Phone:</strong> {profileData.phone}</p>
              <p><strong>Address:</strong> {profileData.address}</p>
              <p><strong>License Number:</strong> {profileData.licenseNumber}</p>
              <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit Profile</button>
            </div>
          )}
        </section>

        <section className="profile-section">
          <h3>Rental History</h3>
          <div className="rental-history">
            <p>No rental history yet.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
