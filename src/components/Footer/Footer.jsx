import React from 'react'
import './Footer.css'
function Footer() {
  return (
 <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>VRINDHAVANAM</h3>
            <p>
              Bringing nature closer to your doorstep—our plants are home-grown, hand-picked, and nurtured with care for your living space.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="YouTube">
                📺
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#plants">Plants</a>
              </li>
              <li>
                <a href="#seeds">Seeds</a>
              </li>
              <li>
                <a href="#planters">Planters</a>
              </li>
              <li>
                <a href="#care">Plant Care</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#shipping">Shipping Info</a>
              </li>
              <li>
                <a href="#returns">Returns</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📞 +91 987654321</p>
              <p>✉️ info@vrindhavanam.in</p>
              <p>📍 Ambalapadi, Eranhikal, Kozhikode, India</p>
              <p>🕒 Mon-Sat: 9AM-6PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Vrindhavanam. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
      )
}

export default Footer