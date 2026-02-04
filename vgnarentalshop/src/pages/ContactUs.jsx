import '../styles/forms.css';

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      <h2>Contact Us</h2>
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> info@skyhighrentals.com</p>
          <p><strong>Phone:</strong> 123-456-7890</p>
          <p><strong>Address:</strong> 123 Aviation Way, Sky City, SC 12345</p>
          <p><strong>Hours:</strong> Mon-Fri 8AM-8PM, Sat-Sun 9AM-6PM</p>
        </div>
      </div>
    </>
  );
}
