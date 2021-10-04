import React from "react"

import uke from "../../Videos/uke.mp4"

import "./dynamicDiv.css"


class Uke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render () {
        return( 
        <video width="320" className="my_image_click" height="240" controls loop autoPlay>
        <source src={uke} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      )
    }
}


export default Uke