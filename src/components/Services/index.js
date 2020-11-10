import React from "react";
import PeopleCard from "./PeopleCard";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import p1 from "../../images/p1.jpg";

function Services() {
  return (
    <div className="services">
      <div className="text-wrapper">
        <p className="text">
          We <br /> <strong>Build </strong> <br />
          Strong <br />{" "}
          <span style={{ color: "#8132D2", "font-weight": "bold" }}>
            Brands
          </span>
        </p>
      </div>

      <div className="people">
        <div className="ppl-card-wrapper p1">
          <p className="name">Nora Simp</p>
          <div className="icons">
            <AiFillFacebook />
            <AiOutlineTwitter />
          </div>
        </div>
        <div className="ppl-card-wrapper p2">
          <p className="name">Manuel Vanel</p>
          <div className="icons">
            <AiFillFacebook />
            <AiOutlineTwitter />
          </div>
        </div>
        <div className="ppl-card-wrapper p3">
          <p className="name">Nina Soria</p>
          <div className="icons">
            <AiFillFacebook />
            <AiOutlineTwitter />
          </div>
        </div>
        <div className="ppl-card-wrapper p4">
          <p className="name">Joanna Doe</p>
          <div className="icons">
            <AiFillFacebook />
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
