import React, { useState } from "react";
import "./Contact.css";
import { TbMessageChatbotFilled } from "react-icons/tb";

import { SiMinutemailer } from "react-icons/si";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f1f8f91f-4908-4815-a3e1-f6bd5d270f16");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us Message <TbMessageChatbotFilled />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, modi
          dolorem perferendis quibusdam voluptate quo odit! Distinctio, modi
          quaerat veritatis eveniet praesentium cupiditate vitae veniam nam hic
          corrupti dignissimos aliquam?
        </p>
        <ul>
          <li>
            <SiMinutemailer className="contact-icon" />
            Contact@randyexample.com
          </li>
          <li>
            <PiPhoneCallFill className="contact-icon" />
            +1 123-456-7890
          </li>
          <li>
            <FaMapMarkerAlt className="contact-icon" />
            77 Massachusetts Ave, Cambridge <br />
            MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile Number"
            required
          />

          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Meassage"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now
            <MdArrowRightAlt className="arrow-right" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
