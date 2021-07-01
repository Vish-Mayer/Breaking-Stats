import React from "react";
import { deadOrAlive } from "../../helpers/deadOrAlive";
import "./Card.css";

const Card = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <div className="img-wrap">
          <div className="overlay">
            <div className={deadOrAlive(props.status)}>
              <h4 className="card-title">{props.status}</h4>
            </div>
          </div>
          <img src={props.imgsrc} alt="Image1" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="title">{props.title}</h4>
          <p className="card-text text-secondary">{props.nickname}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
