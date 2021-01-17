import React from "react";
import "./Body2.css";
import pic2 from "../assets/pic2.jpg";

const Body2 = () => {
  return (
    <div className="Body2-container">
      <div className="left-body2">
        <img src={pic2} alt="qwe" height="555" id="img-body2" />
      </div>
      <div className="right-body2">
        <p className="p1-body2">Sarah Jeni</p>
        <p className="p2-body2">
          Ultra helped me increase my revenue by over 3X in less than 3 months
        </p>
        <p className="p3-body2">
          Their team is wonderfull I can't believe I didn't start working with
          them earlier.
        </p>
        <button className="btn2">View Case Study</button>
      </div>
    </div>
  );
};

export default Body2;
