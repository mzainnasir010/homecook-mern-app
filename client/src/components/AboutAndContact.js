import React from 'react';
import './AboutAndContact.css';

function AboutAndContact() {
  return (
    <div className="about-contact-section">
      <section id="about-us" className="about-us-section">
        <h2>About Us</h2>
        <p>
          At HomeCook, we believe in the goodness of home-cooked meals. Our mission is to bring the 
          comfort and flavor of home-cooked food to your doorstep. We carefully prepare each meal with 
          the finest ingredients to ensure that you get a taste of authentic homemade flavors every time. 
        </p>
        <p>
          Whether it's a comforting soup, spicy biryani, or a rich curry, we have something for everyone. 
          We focus on quality, taste, and customer satisfaction, and we are committed to providing meals 
          that feel like they're made with love.
        </p>
        <p>
          Join us on our culinary journey and experience the joy of home-cooked food delivered to you!
        </p>
        <h2>Contact Us</h2>
      </section>

      <section id="contact-us" className="contact-us-section">
        <div className="contact-content">
          <h3>📧 Email:</h3>
          <p>&nbsp;&nbsp;mzainnasir@gmail.com</p>
          <h3>📞 Phone:</h3>
          <p>&nbsp;&nbsp;+92-333-4374533</p> 
          <h3>🕒 Hours:</h3>
          <p>&nbsp;&nbsp;Mon-Sat, 9:00 AM - 7:00 PM</p>
        </div>
      </section>
    </div>
  );
}

export default AboutAndContact;  
