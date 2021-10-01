import React from "react";
import "./navbar.css";
import moon from "../../Images/moon.png"
import sun from "../../Images/sun.png"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="heading" id="heading">
        <div className="switch-container">
          <img src={moon} style={{width: '25px', height: '25px'}} alt="dark" />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider-container round"></span>
          </label>
          <img src={sun} style={{width: '25px', height: '25px'}} alt="light" />
        </div>
        <h3>Alex Leventis</h3>
        <div className="nav-container">
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#resume">Resume</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Navbar;
