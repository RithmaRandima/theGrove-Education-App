import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; 2025 the
        <span style={{ color: "cornflowerblue", fontWeight: "800" }}>
          GROVE
        </span>
        . All Rights Reserved.
      </p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
