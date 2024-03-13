import React from "react";
import "./card.css";

function Card(props) {
  const h2Style = {
    color: "red",
    fontWeight: "900",
  };

  return (
    <div className="card">
      <div>
        <img src={props.img} alt="product" width={"200px"} />
      </div>
      <h2 style={h2Style}>{props.name}</h2>
      <p style={{ fontWeight: "bold" }}>{props.des}</p>
    </div>
  );
}

export default Card;
