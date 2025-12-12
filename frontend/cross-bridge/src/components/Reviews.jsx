import React, { useEffect } from "react";
import human from "../assets/person.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Reviews() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h2>Customer's Reviews</h2>
      <div className="all-reviews" data-aos="zoom-in">
        <div className="review">
          <div>
            <img className="review-img" src={human} alt="" />
          </div>
          <div className="review-content">
            <p className="review-text">
              “The product quality is consistently outstanding, exceeding my
              expectations every time.”
            </p>
            <p className="review-name">Mello Asare</p>
          </div>
        </div>
        <div className="review">
          <div>
            <img className="review-img" src={human} alt="" />
          </div>
          <div className="review-content">
            <p className="review-text">
              “The product quality is consistently outstanding, exceeding my
              expectations every time.”
            </p>
            <p className="review-name">Mello Asare</p>
          </div>
        </div>
      </div>
    </div>
  );
}
