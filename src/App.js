import React from "react";
import Header from "./headers/Header";
import Resume from "./resume/Resume";
import Projects from "./_projects/Projects";
import Footer from "./headers/Footer";
import waketech from "./Images/wake.png"
import wake2 from "./Images/wake2.png"
import site from "./Images/site.png"
import site2 from "./Images/site2.png"
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const mode = document.querySelector("input");
    const wake_tech = document.getElementById("wake");
    const sites = document.getElementsByName("site-link");
    let x = 0;
    mode.addEventListener("change", () => {
      document.body.classList.toggle("light-mode");
      wake_tech.src = x % 2 === 1 ? `${waketech}` : `${wake2}`;
      sites[1].style.backgroundImage = x % 2 === 1 ? `url(${site})` : `url(${site2})`;
      sites[0].style.backgroundImage = x % 2 === 1 ? `url(${site})` : `url(${site2})`;
      x++;
    });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Resume></Resume>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
