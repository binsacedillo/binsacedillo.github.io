import React, { useState } from 'react';
import Button from '../components/common/Button';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState(() => getFromLocalStorage('contactMessages') || []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new message object with timestamp
    const newMessage = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toLocaleString()
    };

    // Add to messages array
    const updatedMessages = [newMessage, ...messages];
    setMessages(updatedMessages);
    
    // Save to localStorage
    saveToLocalStorage('contactMessages', updatedMessages);

    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleDeleteMessage = (id) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    saveToLocalStorage('contactMessages', updatedMessages);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="contact-description">
          Have questions or feedback? Send us a message and we'll get back to you as soon as possible.
        </p>

        {submitted && (
          <div className="success-message" role="status" aria-live="polite">
            ✓ Thank you for your message! We'll get back to you soon.
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message here..."
              required
            />
          </div>
          <Button type="submit" variant="primary" size="large">
            Send Message
          </Button>
        </form>

        {/* Display submitted messages */}
        {messages.length > 0 && (
          <div className="messages-section">
            <h2>Submitted Messages</h2>
            <div className="messages-list">
              {messages.map((msg) => (
                <div key={msg.id} className="message-card">
                  <div className="message-header">
                    <div className="message-info">
                      <h3>{msg.name}</h3>
                      <p className="message-email">{msg.email}</p>
                      <span className="message-date">{msg.date}</span>
                    </div>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this message? This action cannot be undone.')) {
                          handleDeleteMessage(msg.id);
                        }
                      }}
                      aria-label="Delete message"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="message-content">
                    <p>{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
