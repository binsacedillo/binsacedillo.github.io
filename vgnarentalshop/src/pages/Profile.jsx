import { useAuth } from '../hooks/useAuth';
import '../styles/forms.css';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="auth-container">
      <h2>Your Profile</h2>
      <div className="profile-card">
        <div className="profile-header">
          <h3>{user?.name || 'User'}</h3>
          <p>{user?.email || 'user@example.com'}</p>
        </div>
        <div className="detail-row">
          <div>
            <label className="detail-label">Email:</label>
            <p>{user?.email || 'Not set'}</p>
          </div>
        </div>
        <div className="profile-actions">
          <a href="/payment-delivery" className="btn-primary">
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
}
