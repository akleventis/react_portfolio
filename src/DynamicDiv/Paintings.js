import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import water from "../Images/water.jpg";
import smile from "../Images/smile.jpeg";
import eye from "../Images/eye.jpeg";
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
            <img src={smile} alt="smile" />
          </div>
          <div>
            <img src={eye} alt="eye" />
          </div>
          <div>
            <img src={flow} alt="flow" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Paintings;
