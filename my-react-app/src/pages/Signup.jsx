import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/forms/SignupForm';

const Signup = () => {
  return (
    <div className="signup-page">
      <SignupForm />
      <p className="auth-link">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Signup;
