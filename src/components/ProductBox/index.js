import React from "react";
import "./style.css";

const ProductBox = ({ image, price, name }) => (
  <div className="product-box">
    <div className="product-box-image-wrapper">
      <img className="product-box-image" src={require(`../../assets/images/${image}`)} alt="Proizvod" />
    </div>
    <div className="product-name">
      <p>{name}</p>
    </div>
    <div className="product-line"></div>
    <div className="product-price">
      <p>{price}</p>
    </div>
  </div>
);

export default ProductBox;
