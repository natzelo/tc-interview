import React from "react";
import g1 from "../images/g1.jpg";
import g2 from "../images/g2.jpg";
import g3 from "../images/g3.jpg";
import g4 from "../images/g4.jpg";
import g5 from "../images/g5.jpg";
import g6 from "../images/g6.jpg";

function Gallery() {
  return (
    <div className="gallary-card">
      <div class="container">
        <img src={g1} alt="Avatar" class="image" />
        <div class="overlay">
          <div class="text">Specturm</div>
        </div>
      </div>
      <div class="container">
        <img src={g2} alt="Avatar" class="image" />
        <div class="overlay">
          <div class="text">Coral</div>
        </div>
      </div>
      <div class="container">
        <img src={g3} alt="Avatar" class="image" />
        <div class="overlay">
          <div class="text">Pretty in Pink</div>
        </div>
      </div>
      <div class="container">
        <img src={g4} alt="Avatar" class="image" />
        <div class="overlay">
          <div class="text">Dragon Fruit</div>
        </div>
      </div>
      <div class="container">
        <img src={g5} alt="Avatar" class="image" />
        <div class="overlay">
          <div class="text">Iphone X Wallpaper</div>
        </div>
      </div>
      <div class="container">
        <img src={g6} alt="Avatar" class="image" />
        <div class="overlay">
          <div class="text">Concert</div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
