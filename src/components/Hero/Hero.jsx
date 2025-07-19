import React from "react";
import "./Hero.css";
import { MdArrowRightAlt } from "react-icons/md";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curiculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more
          <MdArrowRightAlt className="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
