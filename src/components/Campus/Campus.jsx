import React from "react";
import "./Campus.css";
import img from "../../assets/img1.jpg";
import { MdArrowRightAlt } from "react-icons/md";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <MdArrowRightAlt className="arrow-right" />
      </button>
    </div>
  );
};

export default Campus;
