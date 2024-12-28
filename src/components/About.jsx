import React from 'react';
import './Componet.css';
import aboutimage from './aboutimage.png'
import work from './work.png'
import review from './review.png'
export default function AboutUs() {
  return (
    <div className="about-container">
      {/* About Company Section */}
      <section className="about-section">
        
        <img src={aboutimage} alt="Company Building" />
        <p id='ab-p'>
          Welcome to Live Luxury! We are a leading real estate company specializing in luxurious homes and properties.
          Our mission is to provide exceptional service to our clients and help them find their dream homes.
          With years of experience and a dedicated team, we ensure a seamless and satisfying experience for all our customers.
        </p>
      </section>

      {/* Past Work Section */}
      <section className="past-work-section">
        
        <img src={work} alt="Past Work Example" />
        <p>
          Over the years, we have successfully closed numerous deals, helping families and individuals move into their
          perfect homes. Our portfolio includes a wide range of properties, from cozy apartments to grand villas.
          Each project reflects our commitment to quality and customer satisfaction.
        </p>
        <ul>
          <li>Luxury Villa in Beverly Hills</li>
          <li>Modern Apartment in New York City</li>
          <li>Beachfront Property in Miami</li>
          <li>Spacious Family Home in San Francisco</li>
        </ul>
      </section>

  
      <section className="reviews-section">
        <h2 id="hd">Customer Reviews</h2>
        <img src={review} alt="Happy Customers" />
        <div className="review">
          <p>"Living Luxury helped us find our dream home! The process was smooth, and the team was extremely professional."</p>
          <cite>- Sarah & John Doe</cite>
        </div>
        <div className="review">
          <p>"I highly recommend Living Luxury. They found us the perfect property that met all our needs and more."</p>
          <cite>- Jane Smith</cite>
        </div>
      </section>
    </div>
  );
}
