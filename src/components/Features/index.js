import React from "react";
import FeatureElement from "./FeatureElement";

function index() {
  return (
    <div className="features-section">
      <div className="big-wrapper">
        <div className="feature-text-wrapper">
          <h3>We are consultants and we develop Digital Strategies</h3>
          <p>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis commodo consequat.
          </p>
        </div>
      </div>

      <FeatureElement
        color="#ff008e"
        number="1"
        heading="Innovation"
        description="Interactively brand robust collaboration and idea-sharing rather than dynamic e-tailers"
      />
      <FeatureElement
        color="#6468df"
        number="2"
        heading="Intuitive"
        description="Interactively brand robust collaboration and idea-sharing rather than dynamic e-tailers"
      />
      <FeatureElement
        color="#63b4f7"
        number="3"
        heading="Modern"
        description="Interactively brand robust collaboration and idea-sharing rather than dynamic e-tailers"
      />
    </div>
  );
}

export default index;
