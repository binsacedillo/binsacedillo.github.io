import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  to = null,
  href = null,
  className = ''
}) => {
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && 'btn-full-width',
    loading && 'btn-loading',
    disabled && 'btn-disabled',
    icon && 'btn-with-icon',
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {loading && (
        <span className="btn-spinner">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="3" strokeOpacity="0.25"/>
            <path d="M12 2a10 10 0 0110 10" strokeWidth="3" strokeLinecap="round" className="spinner-path"/>
          </svg>
        </span>
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className="btn-icon btn-icon-left">{icon}</span>
      )}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && !loading && (
        <span className="btn-icon btn-icon-right">{icon}</span>
      )}
    </>
  );

  // External link
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  // Internal router link
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
        onClick={disabled || loading ? (e) => e.preventDefault() : onClick}
        aria-disabled={disabled}
        role="button"
      >
        {content}
      </Link>
    );
  }

  // Regular button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {content}
    </button>
  );
};

// Icon Button Component
export const IconButton = ({ 
  icon, 
  onClick, 
  variant = 'ghost',
  size = 'medium',
  disabled = false,
  ariaLabel,
  className = ''
}) => {
  return (
    <button
      type="button"
      className={`btn-icon-only btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

// Button Group Component
export const ButtonGroup = ({ 
  children, 
  spacing = 'default',
  orientation = 'horizontal',
  className = '' 
}) => {
  return (
    <div className={`btn-group btn-group-${orientation} btn-group-spacing-${spacing} ${className}`}>
      {children}
    </div>
  );
};

export default Button;
