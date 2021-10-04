import React from "react"

import read from "../Images/read.jpg"

import "./dynamicDiv.css"


class Read extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render () {
        return( 
        <img className="my_image_click" src = {read} alt="computer"/>
      )
    }
}


export default Read