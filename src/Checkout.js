import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal"
function Checkout() {
  return (
    <div className="checkout">
      {/* <h1>This is test route apper </h1> */}

      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout_ad"
        />

        <div>
          <h2 className="checkout_title">your Shopping Baskete購物車</h2>
          {/* //這邊放入你的商品 */}
          
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>

      <div className="checkout_right">
        <h2>這邊是右邊的</h2>
      </div>
    </div>
  );
}

export default Checkout;
