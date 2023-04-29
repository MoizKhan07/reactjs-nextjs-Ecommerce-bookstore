import React from "react";
import book from "./book.jpg";
import "./card.css";

const Card = ({ title, subtitle, price, img, rating }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={book} />
        <div className="sale">Flash Sale</div>
        <div className="rating">⭐ 5.0</div>
      </div>
      <h4 className="title">Milk and Honey</h4>
      <p className="author">Rupi Kaur</p>
      <h3 className="book-price">Rp 685.000</h3>
    </div>
  );
};

export default Card;
