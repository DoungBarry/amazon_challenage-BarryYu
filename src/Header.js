import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header_search">
        <input className="header_searchIput" type="text" />
        {/* LOGO */}

        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <p>Hello</p>
          <span className="header_optionLineOne"></span>
        </div>

        <div className="header_option">
          <p>Order</p>
          <span className="header_optionLineTwo"></span>
        </div>

        <div className="header_optioan">
          <p>your</p>
          <span className="header_optionLineThree">
            <ShoppingCartIcon className="shoppingcarIcon" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
