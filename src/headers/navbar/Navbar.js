import React from "react";
import "./navbar.css";
import { SunImg, MoonImg } from "../../assets/index.js"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="heading" id="heading">
        <div className="switch-container">
          <img src={MoonImg} alt="dark" />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider-container round"></span>
          </label>
          <img src={SunImg}  alt="light" />
        </div>
        <h3>Alex Leventis</h3>
      </div>
    );
  }
}

export default Navbar;
