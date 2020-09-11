import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>This is book </p>
        <p className="product_price">
          <small>NT</small>
          <strong>100</strong>
        </p>

        <div className="product_rating">
          <p> s </p>
        </div>
      </div>

      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        alt=""
      />

      <button> Add to basket </button>
    </div>
  );
}

export default Product;
