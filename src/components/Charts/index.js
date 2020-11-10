import React from "react";
import BarChart from "./BarChart";

function index() {
  return (
    <div className="charts">
      <h3>
        {" "}
        <span style={{ color: "rgb(129, 50, 210, 1)" }}>CODE</span> SKILLS
      </h3>
      <BarChart background="rgb(129, 50, 210, 1)" />
      <h3>
        {" "}
        <span style={{ color: "rgb(207, 83, 111, 1)" }}>DESIGN </span>SKILLS
      </h3>
      <BarChart background="rgb(207, 83, 111, 1)" />
    </div>
  );
}

export default index;
