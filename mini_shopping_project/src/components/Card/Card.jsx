import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ thumbnail, title, price, rating, productId }) {
  return (
    <div className="productCard">
      <div className="image">
        <img src={thumbnail} alt="" />
      </div>
      <div className="details">
        <h2>{title.length > 10 ? title.slice(0, 10) + "..." : title}</h2>
        <h2>$ {price}</h2>
      </div>
      <p className="rating">Rating :- {rating}</p>
      <div className="btn">
        <button>Add To Cart</button>
        <Link className="detailBtn" to={`/product/${productId}`}>
          Detail
        </Link>
      </div>
    </div>
  );
}

export default Card;
