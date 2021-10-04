import React from "react";
import { Carousel } from "react-responsive-carousel";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import one from "../../Images/1.jpg"
import two from "../../Images/2.jpg";
import three from "../../Images/3.jpg";
import four from "../../Images/4.jpg";
// import five from "../../Images/5.jpg";
import six from "../../Images/6.jpg";

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
            <img src={three} alt="three" />
          </div>
          <div>
            <img src={six} alt="six" />
          </div>
          <div>
            <img src={four} alt="four" />
          </div>
          <div>
            <img src={two} alt="two" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Paintings;
