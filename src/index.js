import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./css/style.css";
//import Card from "./card"
// import Item from "./item"
// import Items from './items'
import App from "./app";
// import App from "./app2";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
//ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById("root"));
//ReactDOM.render(<Card/>, document.getElementById("root"));
//ReactDOM.render(<Item/>,document.querySelector('#root'))
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
