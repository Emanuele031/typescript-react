import React from 'react';

const Contact: React.FC = () => {
  return (
    <div
      className="container py-5"
      style={{
        backgroundColor: 'black', // Imposta lo sfondo nero
        minHeight: '100vh',
        paddingTop: '3rem',
        color: 'white',
        maxWidth: "100%",
      }}
    >
      <h2 className="text-center mb-5">Contact Us</h2>

      {/* Sezione: Introduzione */}
      <section className="text-center mb-5">
        <p>
          We're always happy to hear from you! Whether you have a question, feedback, or just want to chat about space, feel free to reach out to us through any of the methods below. We're here to help and answer any inquiries you might have.
        </p>
      </section>

      {/* Sezione: Form di contatto */}
      <section className="mb-5">
        <h3 className="text-center mb-4">Get in Touch</h3>
        <form action="mailto:info@spaceflightnews.com" method="post">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea className="form-control" id="message" rows={5} placeholder="Write your message here" required></textarea>
          </div>
          <button type="submit" className="btn btn-black w-100 text-white border border-white">Send Message</button>
        </form>
      </section>

      {/* Sezione: Altri modi per contattarci */}
      <section className="text-center mb-5">
        <h3>Connect with Us on Social Media</h3>
        <p>Follow us or send us a direct message on any of the following platforms:</p>
        <div className="d-flex justify-content-center">
          <a href="https://twitter.com/spaceflightnews" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://facebook.com/spaceflightnews" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://instagram.com/spaceflightnews" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </section>

      {/* Sezione: Dettagli di contatto */}
      <section className="text-center mb-5">
        <h3>Contact Details</h3>
        <p>If you prefer, you can also reach us using the following details:</p>
        <ul className="list-unstyled">
          <li>Email: <a href="mailto:info@spaceflightnews.com" className="text-light">info@spaceflightnews.com</a></li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Space Lane, Galaxy City, Universe</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center mt-5 text-light">
        <p>&copy; 2024 Spaceflight News. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
