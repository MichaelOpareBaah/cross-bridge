import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SubFooter() {
  return (
    <>
      <div className="sub-footer">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <NavLink className="footer-sub-links">Home</NavLink>
          <NavLink className="footer-sub-links">About Us</NavLink>
          <NavLink className="footer-sub-links">Courses</NavLink>
          <NavLink className="footer-sub-links">Media</NavLink>
          <NavLink className="footer-sub-links">Contact Us</NavLink>
        </div>
        <div>
          <h3>Our Partners</h3>
        </div>
        <div>
          <h3>Connect with us</h3>
          <div className="social-media-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook size={32} color="#fff" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter size={32} color="#fff" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram size={32} color="#fff" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin size={32} color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
