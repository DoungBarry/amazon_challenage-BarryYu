import React from "react";
import Product from "./Product";
import "./Home.css";
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
          <Product
            title="this is book "
            price={100}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
          />

          <Product />
          {/* {/* product */}
        </div>

        <div className="home_row">
          <Product />
          <Product />
          <Product />
          {/* product */}
          {/* product */}
          {/* product */}
        </div>
        <div className="home_row">
          <Product />
          {/* <Product /> */}
          {/* product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
