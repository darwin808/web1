import React from "react";
import "./Body6.css";

const Body6 = () => {
  return (
    <div className="body6">
      <div className="header-body6">
        <p className="para1-body6">
          Join our exclusive membership to receive the latest news and trends.
        </p>
        <p className="para2-body6">You can unsubscribe at anytime.</p>
        <div className="btn-holder">
          <input type="text" className="input1" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
      <div className="body-body6">
        <div className="about">
          <p className="about-foo">About Us</p>
          <div className="foochild">How it works</div>
          <div className="foochild">Testimonials</div>
          <div className="foochild">Careers</div>
          <div className="foochild">Investors</div>
          <div className="foochild">Terms of services</div>
        </div>
        <div className="about">
          <p className="about-foo">Contact Us</p>
          <div className="foochild">Contact</div>
          <div className="foochild">Support</div>
          <div className="foochild">Destinations</div>
          <div className="foochild">Sponsorships</div>
        </div>
        <div className="Videos">
          <p className="about-foo">About Us</p>
          <div className="foochild">Submit Video</div>
          <div className="foochild">Ambassadors</div>
          <div className="foochild">Agency</div>
          <div className="foochild">Influencer</div>
        </div>{" "}
        <div className="about">
          <p className="about-foo">Social Media</p>
          <div className="foochild">Instagram</div>
          <div className="foochild">Facebook</div>
          <div className="foochild">Youtube</div>
          <div className="foochild">Twitter</div>
        </div>{" "}
      </div>
      <div className="foo-body6">
        <h1 className="foo-header">ULTRA.io</h1>
        <h2 className="foo-subheader">ULTRA 2020</h2>
        <div className="socmedia">
          <i class="fab fa-facebook fa-2x"></i>
          <i class="fab fa-youtube fa-2x"></i>
          <i class="fab fa-twitter fa-2x"></i>
          <i class="fab fa-instagram fa-2x"></i>
        </div>
      </div>
    </div>
  );
};

export default Body6;
