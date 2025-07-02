import React from "react";
import "./footer.css";
// import BlurText from "../../BlurText/BlurText.jsx";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="patterns">
        <h2 className="footer-title animated-text">CONNECT WITH ME</h2>
      </div>

      <div className="social-item">
        <a
          href="https://www.instagram.com/messian_muggle10/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/parthib-biswas-79b06029b/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/ParthibBiswas10"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

      <div className="footer-text">
        <p>&copy; 2025 Parthib Biswas | AI Image Generator</p>
      </div>
    </div>
  );
};

export default Footer;
