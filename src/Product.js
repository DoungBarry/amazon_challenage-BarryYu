import React from "react";
import "./Product.css";

import { useStateValue } from "./StateProvider";

//當物件放入function () 的語法裡 ：
// (title price imgae rating) 放在語法裡是錯誤的
// 正確是＝> ({title price imgae rating})
function Product({ id, title, price, image, rating }) {
  //useStateValue 是將數據層資料拉進來 （ 拉去給checkout )
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title,
        image: image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title} </p>
        <p className="product_price">
          <small>NT</small>
          <strong>{price}</strong>
        </p>

        {/* // js:17 非常棒的小技巧 
// 物件存取後再ＨＯＭＥ.js針對rating物件只要輸入數字就能改變product.js的rating 數量 : 51:00 // */}

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="sheep">
                🐑
              </span>
            ))}
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
