import React, { useState, useEffect } from "react";
import "./Navbar.css";

function useWindow() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const x = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", x);
  }, []);
  return size;
}

const Navbar = () => {
  const [height, width] = useWindow();
  const [burger, setburger] = useState(false);
  const handleburger = () => {
    setburger(!burger);
  };

  return (
    <div className="navbar">
      <div className="navheader">
        <h1>ULTRA.io</h1>
      </div>
      <i
        onClick={handleburger}
        className={burger ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i>
      <div className="navBody">
        {width > 700 ? (
          <ul className="navlinks2">
            <li className="navitems">Home</li>
            <li className="navitems">Services</li>
            <li className="navitems">Products</li>
            <li className="navitems">
              <button className="btn">SIGN UP</button>
            </li>
          </ul>
        ) : (
          <ul
            style={{ display: `${burger ? "flex" : "none"}` }}
            className="navlinks">
            <li className="navitems">Home</li>
            <li className="navitems">Services</li>
            <li className="navitems">Products</li>
            <li className="navitems">
              <button className="btn">SIGN UP</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
