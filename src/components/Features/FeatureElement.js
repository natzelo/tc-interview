import React from "react";

function FeatureElement(props) {
  return (
    <div className="feature-element">
      <h2 style={{ color: props.color }}>0{props.number}.</h2>
      <h3>{props.heading}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default FeatureElement;
