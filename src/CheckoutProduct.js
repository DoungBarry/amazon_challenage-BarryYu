import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, price, image, rating }) {

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>NT</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            //for rating this object
            .fill()
            .map((_, i) => (
              //map is 迴圈 : i is index
              //圖樣可以直接copy 但要標籤 img and aria-label
              <span role="img" aria-label="sheep">
                ⭐
              </span>
            ))}
        </div>
        <button> remove to basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
