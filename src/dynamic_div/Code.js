import React from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import computer from "../assets/images/computer.jpg";
import github from "../assets/images/github.png"

import "./dynamicDiv.css";

class Computer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AOS.init({
      duration: 800
    });
  }

  render() {
    return (
      <div className="code_container">
        <a  className="img-link" href="http://alexcod.es/github" target="_blank" rel="noreferrer">
            <img data-aos={"zoom-in"} className="inner_image" src={github} alt="github" />
        </a>
        <img className="my_image_click" src={computer} alt="computer" />
      </div>
    );
  }
}

export default Computer;