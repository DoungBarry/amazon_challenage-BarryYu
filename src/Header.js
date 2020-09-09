import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* LOGO */}
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">你好,東承</span>
          <span className="header_optionLineTwo">帳戶與清單</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">退貨？</span>
          <span className="header_optionLineTwo">與訂單</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">退訂閱</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo  header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
