import React from "react";
import "./Subtotal.css";
//把npm i react-currency-format 輸入工具
import CurrencyFormat from "react-currency-format";
function subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          // 單純的<> 是<div>的意思
          <>
            <p>
              {/* port of the somthing */}
              Subtotal (0 items):<strong>0</strong>
            </p>

            <small className="subtotal_gift">
              <input type="checkbox" className="checkbox" />
              this order contains a gift 總所有品項
            </small>
          </>
        )}
        decimalScale={2}
        value={0} //port of somthing
        displayType={"text"}
        thousandSeparator={true}
        prefix={"NT"}
      />
      <button>process to checkout </button>
      {/* //完成一個組件CurrecnyFormat ,將他導入checkout.css */}
    </div>
  );
}

export default subtotal;
