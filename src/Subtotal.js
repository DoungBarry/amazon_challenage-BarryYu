import React from "react";
import "./Subtotal.css";
//把npm i react-currency-format 輸入工具
import CurrencyFormat from "react-currency-format"
function subtotal() {
  return <div className="subtotal">
<CurrencyFormat
renderText={(value)=>{

// 單純的<> 是<div>的意思
<>
<p>
Subtotal (0 items):<strong>0</strong> 

</p>

<small className="subtotal_gift">
  <input type="checkbox" className="checkbox"/>
  this order contains a gift 總所有品項
</small>
</>
}}
decimalScale={2}
value={getBaskerTotal}
displayType={"text"}
thousandSeparator={ture}
prefix={"NT"}

/>  

{/* //完成一個組件CurrecnyFormat ,將他導入checkout.css */}
  </div>;
}

export default subtotal;
