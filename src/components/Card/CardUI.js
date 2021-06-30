import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img
          className="card-img-top d-flex"
          src={props.imgsrc}
          alt="Card Picture"
        />
        <div className="card-body text-dark">
          <h4 className="title">{props.title}</h4>
          <p className="card-text text-secondary">{props.nickname}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
