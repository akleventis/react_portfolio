import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";







ReactDOM.render(<App />, document.getElementById("root"));






let lastScrollUp;
let navbar = document.getElementById("heading");
window.addEventListener("scroll", function () {
  var scrollUp = window.pageYOffset || document.documentElement.scrollUp;
  scrollUp > lastScrollUp ? (navbar.style.top = "-80px") : (navbar.style.top = "0");
  lastScrollUp = scrollUp;
});
