import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <h1 className="logo">
        the <span className={`${sticky ? "dark-logo" : ""}`}>GROVE</span>
      </h1>
      <ul className={mobileMenu ? "hide-mobile-menu" : ""}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-160} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-280} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-300} duration={500}>
            Tsetimonials
          </Link>
        </li>
        <li className="btn">
          <Link to="contact" smooth={true} offset={-240} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
      <RiMenu2Fill size={25} className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
