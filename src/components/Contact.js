import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-container">
      <section id="contact">
      <br></br>
        <h1 style={{ textAlign: 'center' }}>Contact</h1>
        <form>
          <input className="form-input" type="text" placeholder="Name" />
          <input className="form-input" type="email" placeholder="Email" />
          <input className="form-input" type="tel" placeholder="Phone" />
          <textarea className="form-textarea" placeholder="Message"></textarea>
          <br />
          <div className="form-submit">
            <button className="form-button" type="submit">Send Message</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
