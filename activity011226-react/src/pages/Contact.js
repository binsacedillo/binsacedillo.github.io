import React, { useState } from 'react';
import './Pages.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page">
      <h2>Contact Us</h2>
      <div className="content">
        <div className="contact-info">
          <section className="section">
            <h3>Get In Touch</h3>
            <p><strong>Email:</strong> info@skyhighrentals.com</p>
            <p><strong>Phone:</strong> +63-123-456-7890</p>
            <p><strong>Address:</strong> 123 Aviation Drive, Metro Manila, Philippines</p>
            <p><strong>Hours:</strong> Monday - Friday: 8:00 AM - 6:00 PM</p>
          </section>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a Message</h3>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="6"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
