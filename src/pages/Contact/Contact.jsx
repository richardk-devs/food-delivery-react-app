import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p className="contact-tagline">
        We'd love to hear from you! Reach out for feedback, support, or general queries.
      </p>

      <div className="contact-container">

      
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> support@foodapp.com</p>
          <p><strong>Phone:</strong> 98765 43210</p>
          <p><strong>Address:</strong> Food App HQ, Mumbai, India</p>

          <h4>Business Hours</h4>
          <p>Mon – Sat: 9:00 AM – 10:00 PM</p>
          <p>Sunday: Closed</p>

          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
          </div>
        </div>

      
        <form className="contact-form">
          <h3>Send a Message</h3>
          
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

    
      <div className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.70010221681!2d73.17308625!3d22.32210265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1765299797936!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
