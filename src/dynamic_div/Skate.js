import React from "react"

import skate from "../assets/images/skate.jpg"

import "./dynamicDiv.css"


class Skate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render () {
        return( 
        <img className="my_image_click" src = {skate} alt="computer"/>
      )
    }
}


export default Skate