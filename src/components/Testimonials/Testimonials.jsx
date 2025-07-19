import React, { useRef } from "react";
import "./Testimonials.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import img from "../../assets/img1.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 33.3;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 33.3;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <GrPrevious className="pre-btn" onClick={slideForward} />
      <GrNext className="nxt-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={img} alt="" />
                <div>
                  <h3>Rithma Randima</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quod, aspernatur perspiciatis quaerat eligendi
                consectetur voluptates a deserunt iusto quas sapiente, odio,
                expedita est voluptatem?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={img} alt="" />
                <div>
                  <h3>Rithma Randima</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quod, aspernatur perspiciatis quaerat eligendi
                consectetur voluptates a deserunt iusto quas sapiente, odio,
                expedita est voluptatem?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={img} alt="" />
                <div>
                  <h3>Rithma Randima</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quod, aspernatur perspiciatis quaerat eligendi
                consectetur voluptates a deserunt iusto quas sapiente, odio,
                expedita est voluptatem?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
