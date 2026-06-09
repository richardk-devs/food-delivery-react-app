
import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

      
        <div className="footer-about">
          <img src={logo} alt="Food App Logo" className="footer-logo" />
          <p>
            Delicious food delivered to your doorstep. Enjoy fresh meals from
            your favorite restaurants anytime.
          </p>
        </div>

       
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
          
          <div className="footer-content-right">
            <h4>Get in touch</h4>
             <ul>
              <li>+1-212-456-7896</li>
              <li>contact@foodapp.com</li>
             </ul>
          </div>
        
        <div className="footer-newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className="footer-social">
            <span>👍</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p> * 2025 Food App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
