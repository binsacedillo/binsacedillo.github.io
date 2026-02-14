import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/forms/LoginForm';

const Login = () => {
  return (
    <div className="login-page">
      <LoginForm />
      <p className="auth-link">
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default Login;
