import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/JJ/1400X280_Shopping-and-entertainment._CB468925650_.jp"
        alt=""
      />

      {/* produce 欄位的數量會決定大小,自動響應 */}
      <div className="home_row">
        <Product />
        {/* product */}
        {/* product */}
      </div>

      <div className="home_row">
        {/* product */}
        {/* product */}
        {/* product */}
      </div>

      <div className="home_row">{/* product */}</div>

      <div className="home_container"></div>
    </div>
  );
}

export default Home;
