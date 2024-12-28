import React, { useState } from "react";
 // Ensure you have a CSS file for styling

export const ContactForm = () => {
  // State to store form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <div className="contact-form" style={{  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
        <form onSubmit={handleSubmit} className="form-container" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <h1 style={{ color: '#007bff' }}>Contact Us</h1>

          <div className="form-group">
            <label className="label-text" htmlFor="name">Name:</label>
            <input 
            className="form-colour"
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          <div className="form-group">
            <label className="label-text" htmlFor="email">Email:</label>
            <input
            className="form-colour"
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          <div className="form-group">
            <label className="label-text" htmlFor="phone">Phone Number:</label>
            <input
            className="form-colour"
              type="tel"
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          <div className="form-group">
            <label className="label-text" htmlFor="message">Message:</label>
            <textarea
            className="form-colour"
              id="message"
              rows="4"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            ></textarea>
          </div>

          <button type="submit" className="submit-button" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
        </form>

        {submitted && (
          <div className="submitted-details" style={{ marginTop: '20px', padding: '10px', border: '1px solid #007bff', borderRadius: '5px', backgroundColor: '#e9f5ff' }}>
            <h2 style={{ color: '#007bff' }}>Submitted Details:</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Message:</strong> {message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
