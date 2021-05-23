import React from "react";
import './Card.css'

const Card = (props) => {
  return (
    <div className={"card "+props.className}>
      <div className="contain">
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Card;
