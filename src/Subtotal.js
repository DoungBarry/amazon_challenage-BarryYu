import React from "react";
import "./Subtotal.css";
//把npm i react-currency-format 輸入工具
import CurrencyFormat from "react-currency-format";

import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  //啟用reducer功能 ,目標是改變basket , State value

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          // 單純的<> 是<div>的意思
          <>
            <p>
              {/* port of the somthing */}
              Subtotal ({basket.length}item):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" className="checkbox" />
              this order contains a gift 總所有品項
            </small>
          </>
        )}
        decimalScale={2}
        // value={0} //port of somthing
        value={getBasketTotal(basket)} //port of somthing
        displayType={"text"}
        thousandSeparator={true}
        prefix={"NT"}
      />
      <button>process to checkout </button>
      {/* //完成一個組件CurrecnyFormat ,將他導入checkout.css */}
    </div>
  );
}

export default Subtotal;
