import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";


function Card(props) {
  return (
    <a href={props.href}>
      <div
        className="card"
        style={{
          backgroundImage: props.image ? `url(${props.image})` : "none",
        }}
      >
        {!props.image && (
          <i className="fa fa-spinner fa-spin" aria-hidden="true" />
        )}
      </div>
    </a>
  );
}

export default Card;