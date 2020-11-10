import React from "react";
import hero from "../images/hero.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-img-wrapper">
        <img src={hero} alt="hero" />
      </div>
      <div className="text-wrapper">
        <p className="hero-heading">Design for all devices</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          similique porro ipsam. dhdhfd welrdlk 4rweflkh
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
