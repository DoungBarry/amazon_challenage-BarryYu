import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

//npm install react-router-dom  做好介面後先安裝路由器再輸入import
import { BowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    //用router路由器 給APP (首頁), 在這個首頁裡面裝載Switch功能，交換過程中使用路由Route (可以到指定某頁面)//
    <Router>
      <div className="App">
        {/* 這邊創建component  */}

        <Switch>
          <Route path="/checkout">
            {/* 這邊放入網頁組件,表示到checkout路徑時會顯示下列 */}
            <Header></Header>
            <Checkout></Checkout>
          </Route>

          <Route path="/">
            {/* 這邊放入網頁組件,表示到checkout路徑時會顯示下列 */}
            <Header></Header>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// ----刪除---
{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}
