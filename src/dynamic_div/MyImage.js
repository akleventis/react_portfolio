import React from "react"

import me from "../assets/images/me1.jpeg"

import "./dynamicDiv.css"


class MyImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return <img src={me} id="my_image" className="my_image_click" alt="profilePicture" />
    }
}


export default MyImage