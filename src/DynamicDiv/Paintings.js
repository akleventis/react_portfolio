import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import water from "../Images/water.jpg";
import bear from "../Images/bear.jpg";
import rezz from "../Images/rezz.jpg";
import eye from "../Images/eye.jpg";
import flow from "../Images/flow.jpg";

import "./dynamicDiv.css";

class Paintings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="my_image_click">
        <Carousel>
          <div>
            <img src={water} alt="water" />
          </div>
          <div>
            <img src={eye} alt="eye" />
          </div>
          <div>
            <img src={flow} alt="flow" />
          </div>
          <div>
            <img src={rezz} alt="rezz" />
          </div>
          <div>
            <img src={bear} alt="bear" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Paintings;
