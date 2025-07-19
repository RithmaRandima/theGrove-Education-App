import React from "react";
import "./Programs.css";
import img from "../../assets/img1.jpg";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { BsPersonFillUp } from "react-icons/bs";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={img} alt="" />
        <div className="caption">
          <FaBookOpenReader className="caption-icon" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={img} alt="" />
        <div className="caption">
          <FaGraduationCap className="caption-icon" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={img} alt="" />
        <div className="caption">
          <BsPersonFillUp className="caption-icon" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
