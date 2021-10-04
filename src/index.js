import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import waketech from "./Images/wake.png"
import wake2 from "./Images/wake2.png"
import site from "./Images/site.png"
import site2 from "./Images/site2.png"







ReactDOM.render(<App />, document.getElementById("root"));





const mode = document.querySelector('input');
const wake_tech = document.getElementById('wake');
const sites = document.getElementsByName("site-link")
let x = 0
mode.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    wake_tech.src = (x%2===1) ? `${waketech}`: `${wake2}`;
    sites[1].style.backgroundImage = (x%2===1) ? `url(${site})` : `url(${site2})`;
    sites[0].style.backgroundImage = (x%2===1) ? `url(${site})` : `url(${site2})`;
    x++;
}); 

let lastScrollUp;
let navbar = document.getElementById("heading");
window.addEventListener("scroll", function () {
  var scrollUp = window.pageYOffset || document.documentElement.scrollUp;
  scrollUp > lastScrollUp ? (navbar.style.top = "-80px") : (navbar.style.top = "0");
  lastScrollUp = scrollUp;
});
