import React from "react";
import "./Header.css";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { Link } from "react-router-dom";

//當要使用Reduex這個API時 需要套用這個功能, 目的是可以將basket數據透過dispatch工能拉到數據層裡面
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      {/* //這邊做一個link 點下去連結到 /首頁 */}
      <Link to="/">
        <img
          className="header_logo"
          // src="http://pngimg.com/uploads/amazon/amazon_PNG11.png">

          src="/Users/yutungcheng/project_front/Amazon/amazone-clone/image/logo.png">
{/* 
    src="/Users/yutungcheng/project_front/Amazon/amazone-clone/image/download.png" > */}

</img>
      </Link>
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

        {/* 這邊做一個link 點圖案會連結到購物車 /checkout 的path */}
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo  header_basketCount">
              {basket?.length}
            </span>

            {/* <span className="header_optionLineTwo  header_basketCount">0</span> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
