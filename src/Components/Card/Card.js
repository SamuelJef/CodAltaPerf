import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{props.title}</h2>
      </div>
      <div className="card-body">
        <p>{props.text}</p>
        <Link to="/login"><button className="bntCard">Saiba Mais</button></Link>
      </div>
    </div>
  );
};  
export default Card;