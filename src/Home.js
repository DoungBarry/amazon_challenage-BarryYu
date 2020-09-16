import React from "react";
import Product from "./Product";
<<<<<<< HEAD

=======
import "./Home.css";
>>>>>>> 6b7f4da5363c7ce1e8ab13ab9f2630152ad030c3
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/JJ/1400X280_Shopping-and-entertainment._CB468925650_.jp"
          alt=" "
        />

        <div className="home_row">
          <Product />
          <Product />
          {/* {/* product */}
        </div>

<<<<<<< HEAD
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
=======
        <div className="home_row">
          <Product />
          <Product />
          <Product />
          {/* product */}
          {/* product */}
          {/* product */}
        </div>
        <div className="home_row">
          {/* <Product /> */}
          {/* product */}
        </div>
      </div>
>>>>>>> 6b7f4da5363c7ce1e8ab13ab9f2630152ad030c3
    </div>
  );
}

export default Home;
