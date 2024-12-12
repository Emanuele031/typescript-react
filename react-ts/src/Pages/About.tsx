import React from 'react';

const About: React.FC = () => {
  return (
    <div
      className="container py-5"
      style={{
        backgroundColor: 'black', // Impostato il colore di sfondo su nero
        minHeight: '100vh',
        paddingTop: '3rem',
        color: 'white',
        maxWidth: "100%",
      }}
    >
      <h2 className="text-center mb-5">About Us</h2>

      {/* Sezione: Introduzione */}
      <section className="text-center mb-5">
        <p>
          Welcome to Spaceflight News! We are passionate about space exploration and its future. Our goal is to bring you the latest news and developments from the world of spaceflight, missions, technologies, and the industry.
        </p>
      </section>

      {/* Sezione: Mission */}
      <section className="text-center mb-5">
        <h3>Our Mission</h3>
        <p>
          We aim to provide a comprehensive platform for space enthusiasts, professionals, and anyone curious about the cosmos. We cover all aspects of space travel, from new spacecraft launches to the latest research on space exploration. Our mission is to keep you informed and excited about the future of space.
        </p>
      </section>

      {/* Sezione: Vision */}
      <section className="text-center mb-5">
        <h3>Our Vision</h3>
        <p>
          Our vision is to inspire and educate the next generation of space explorers and innovators. We believe that space exploration is crucial for humanity's advancement, and we want to be part of the journey that brings space closer to everyone.
        </p>
      </section>

      {/* Sezione: Team */}
      <section className="text-center mb-5">
        <h3>Meet Our Team</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-dark text-light">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member 1" />
              <div className="card-body">
                <h5 className="card-title">Jane Doe</h5>
                <p className="card-text">Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-light">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member 2" />
              <div className="card-body">
                <h5 className="card-title">John Smith</h5>
                <p className="card-text">Lead Editor</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-light">
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member 3" />
              <div className="card-body">
                <h5 className="card-title">Emily Davis</h5>
                <p className="card-text">Content Writer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-5 text-light">
        <p>&copy; 2024 Spaceflight News. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
