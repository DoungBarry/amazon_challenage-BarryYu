import { HelpOutline } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";


function Checkout() {

  //useStateValue 是將數據層資料拉進來 （ 拉去給checkout )
  const [{basket,user},dispatch] = useStateValue();

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
<h3>Hello, {user?.email}</h3>


          <h2 className="checkout_title">your Shopping Baskete購物車</h2>

{basket.map (item=>(
<CheckoutProduct
id={item.id}
title={item.title}
image={item.image}
price={item.price}
rating={item.rating}
/>
))}


          {/* <CheckoutProduct
          title="Fitbit Versa 2 健康與健身智慧型手錶 帶心率 音樂功能 Alexa內建 睡眠和游泳追蹤 黑/碳 單一尺寸 (含 S 和 L 錶帶)"
            price={100}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          /> */}

  

          {/* //這邊放入你的商品 */}

          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
