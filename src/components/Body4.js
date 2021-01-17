import React from "react";
import "./Body4.css";
const Body4 = () => {
  return (
    <div className="body4">
      <h1 className="body4-header">Our Services</h1>
      <div className="body4-items">
        <div className="card1">
          <i className="far fa-gem fa-5x" />
          <h2 className="card-title">Starter Pach</h2>
          <h1 className="card-price">$99.99</h1>
          <h4 className="card-subprice">per each</h4>
          <p className="desc">100 New Users</p>
          <p className="desc">$10,000 Budget</p>
          <p className="desc">Retargeting Analytics</p>
          <button className="btn2-card">Choose Plan</button>
        </div>
        <div className="card2">
          <i className="far fa-gem fa-5x" />
          <h2 className="card-title">Gold Rush</h2>
          <h1 className="card-price">$299.99</h1>
          <h4 className="card-subprice">per each</h4>
          <p className="desc">1000 New Users</p>
          <p className="desc">$50,000 Budget</p>
          <p className="desc">Lead Gen Analytics</p>
          <button className="btn2-card">Choose Plan</button>
        </div>
        <div className="card3">
          <i className="far fa-gem fa-5x" />
          <h2 className="card-title">Diamon Kings</h2>
          <h1 className="card-price">$999.99</h1>
          <h4 className="card-subprice">per each</h4>
          <p className="desc">Unlimited Users</p>
          <p className="desc">Unlimited Budget</p>
          <p className="desc">24/7 Support</p>
          <button className="btn2-card">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Body4;
