import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    //BEM
    <div className="App">
      {/* 這邊創建component  */}

      <Header></Header>

      {/* Header */}

      <Home />
    </div>
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
