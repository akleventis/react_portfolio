import React from "react"

import piano from "../Videos/piano.mp4"

import "./dynamicDiv.css"


class Piano extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render () {
        return( 
        <video width="320" className="my_image_click" height="240" controls loop autoPlay>
        <source src={piano} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      )
    }
}


export default Piano