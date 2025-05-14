import React from "react";
import "./App.css";
import heroImage from "./assets/hero_img.jpg";

const App = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={heroImage} alt="Interior" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Exploration and inspiration</h1>
        <p className="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.
        </p>
        <button className="hero-button">Explore</button>

        <div className="hero-section">
          <h2 className="hero-section-heading">01</h2>
          <p className="hero-section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
          </p>
        </div>

        <div className="hero-section">
          <h2 className="hero-section-heading">02</h2>
          <p className="hero-section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
