import React from "react";

import computer from "../Images/computer.jpg";
import github from "../Images/github.png"

import "./dynamicDiv.css";

class Computer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="code_container">
        <a  className="github" href="http://alexcod.es/github" target="_blank" rel="noreferrer">
            <img className="git_image" src={github} alt="github" />
        </a>
        <img className="my_image_click" src={computer} alt="computer" />
      </div>
    );
  }
}

export default Computer;
