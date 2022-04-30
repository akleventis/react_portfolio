import React from "react";
import Header from "./headers/Header";
import Resume from "./resume/Resume";
import Projects from "./projects/Projects";
import Footer from "./headers/Footer";
import {SiteImg, Site2Img, WakeImg, Wake2Img} from "./assets/index.js"

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
      wake_tech.src = x % 2 === 1 ? `${WakeImg}` : `${Wake2Img}`;
      sites[1].style.backgroundImage = x % 2 === 1 ? `url(${SiteImg})` : `url(${Site2Img})`;
      sites[0].style.backgroundImage = x % 2 === 1 ? `url(${SiteImg})` : `url(${Site2Img})`;
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
