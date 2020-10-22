import React from "react";
import "./Product.css";

import { useStateValue } from "./StateProvider";

//當物件放入function () 的語法裡 ：
// (title price imgae rating) 放在語法裡是錯誤的
// 正確是＝> ({title price imgae rating})
function Product({ id, title, price, image, rating }) {
  //useStateValue 是將數據層資料拉進來 （ 拉去給checkout )
  const [{ basket }, dispatch] = useStateValue();

  //dispatch  the item into data layer

  //dispatch =>reduex的功能 是將資料推送到數據layer

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  /* // js:17 非常棒的小技巧 
// 物件存取後再ＨＯＭＥ.js針對rating物件只要輸入數字就能改變product.js的rating 數量 : 51:00 // 

Refrence:
https://zh-hant.reactjs.org/docs/lists-and-keys.html
*/

  return (
    <div className="product">
      <div className="product_info">
        <p>{title} </p>
        <p className="product_price">
          <small>NT</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            //for rating this object
            .fill()
            .map((_, i) => (
              //map is 迴圈 : i is index
              //圖樣可以直接copy 但要標籤 img and aria-label
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}> Add to basket </button>

      {/* 按下add to basket 按鈕會將 const addtoBasket 的item 推送出去 */}
    </div>
  );
}

// 物件和函數的應用非常重要很多人會搞混＝＝＝ㄑ
export default Product;
