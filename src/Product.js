import React from "react";
import "./Product.css";

//當物件放入function () 的語法裡 ：
// (title price imgae rating) 放在語法裡是錯誤的
// 正確是＝> ({title price imgae rating})
function Product({ title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>NT</small>
          <strong>{price}</strong>
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

// 物件和函數的應用非常重要很多人會搞混＝＝＝ㄑ
export default Product;
