import React from "react";
import "./About.css";
import img from "../../assets/img1.jpg";
import { IoMdPlayCircle } from "react-icons/io";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={img} alt="" className="about-img" />
        <IoMdPlayCircle className="paly-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nururing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem a
          iure nisi rerum, voluptates delectus assumenda vel reprehenderit
          dolores quis, sapiente quas impedit debitis asperiores. Illum
          voluptatibus consectetur incidunt eaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          exercitationem incidunt dolorem sint delectus saepe vero. Autem
          consequuntur exercitationem ea.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet
          officia dolorum, ipsum hic autem explicabo, tempora rem reprehenderit
          neque, aperiam voluptatibus a at placeat nulla tempore dicta beatae
          culpa.
        </p>
      </div>
    </div>
  );
};

export default About;
