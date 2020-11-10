import React from "react";
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";

function PeopleCard(props) {
  return (
    <>
      <div
        className="ppl-card-wrapper"
        style={{ backgroundImage: props.background }}
      >
        <p className="name">{props.name}</p>
        <div className="icons">
          <AiFillFacebook />
          <AiOutlineTwitter />
        </div>
      </div>
    </>
  );
}

export default PeopleCard;
