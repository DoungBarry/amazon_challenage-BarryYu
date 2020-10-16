import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//加入了reducer的initalState
import reducer, { initialState } from "./reducer";
//加入狀態提供者
import { StateProvider } from "./StatProvider";

ReactDOM.render(
  <React.StrictMode>
    {/* Step 1 .將APP包裝在狀態提供者StatePeovider 讓在應用applience任何地方都可以使用
    
     step2. 會使用到兩個組件
     initialState 是初始狀態的
     reducer 可以訪問數據層，這意味者我們可以將信息提取 . 也決定該如何處裡數據 */}

    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    {/* step3. 包裝完後創建 reducer.js  */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
