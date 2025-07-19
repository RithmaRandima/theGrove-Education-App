import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="container">
      <h1 className="logo">
        the <span>GROVE</span>
      </h1>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Tsetimonials</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
