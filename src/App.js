import React, { useEffect } from "react";
import Logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import Login from "./Login"
//網路路由套件
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";

function App() {

const [{authUser}, dispatch] = useStateValue(); 
//將資料＿copy

useEffect(() => {

auth.onAuthStateChanged(authUser)

console.log('The user is >>>>> , authUser ');

if (authUser) {
  dispatch ({
type: 'SET_USER' ,
user :authUser ,
  })
  //使用者登入 / 使用者已經登入 

}else  {
    dispatch({
type:'SET_USER' ,
user:null ,
    })
  }
//使用者登出  / 使用者已經登出

}, [authUser,])
//當這個ＡＰＰ組件讀取時 , 只運作一次  


  return (
    //BEM
    //用router路由器 給APP (首頁), 在這個首頁裡面裝載Switch功能，交換過程中使用路由Route (可以到指定某頁面)//
    <Router>
      <div className="App">
        {/* 這邊創建component  */}

        {/* 換頁面的時候Header 部會改變 */}

<Switch>

<Route path ="/login">
  <Login>Login page</Login> 
     {/* this is login page css lab */}
</Route>
     



 <Route path="/checkout">
            {/* 這邊放入網頁組件,表示到checkout路徑時會顯示下列 */}
            {/* 可以測試: localhot:3000/checkout 路由成功會顯示CHECKOUT內的文字 */}
            {/* <Header></Header> */}
            <Header></Header>
            <Checkout></Checkout>
          </Route>

          <Route path="/">
            {/* 這邊放入網頁組件,表示到checkout路徑時會顯示下列 */}
            {/* <Header></Header> */}
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
