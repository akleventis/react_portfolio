import React from "react"

import computer from "../Images/computer.jpg"

import "./dynamicDiv.css"


class Computer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render () {
        return( 
        <img className="my_image_click" src = {computer} alt="computer"/>
      )
    }
}


export default Computer