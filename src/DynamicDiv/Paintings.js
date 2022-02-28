import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import water from "../Images/water.jpg";
import smile from "../Images/smile.jpeg";
import eye from "../Images/eye.jpeg";
import flow from "../Images/flow.jpg";

import "./dynamicDiv.css";

const images = [
  {
    original: water,
    thumbnail: water,
  },
  {
    original: smile,
    thumbnail: smile,
  },
  {
    original: eye,
    thumbnail: eye,
  },
  {
    original: flow,
    thumbnail: flow,
  },
];

class Paintings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="my_image_click">
        <ImageGallery items={images} />
      </div>
    );
  }
}

export default Paintings;
