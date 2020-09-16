import React from "react";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p> product one </p>
        <p className="product_price">
          <small>$</small>
          <strong>5000元</strong>
        </p>

        <div className="product_rating">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Product;
