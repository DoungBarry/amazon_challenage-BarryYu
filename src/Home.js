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
          <Product />
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
          {/* <Product /> */}
          {/* product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
