import React from "react"

import snow from "../../Videos/snow.mov"

import "./dynamicDiv.css"


class Snow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render () {
        return( 
        <video width="320" className="my_image_click" height="240"  controls loop autoPlay muted>
        <source src={snow} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      )
    }
}


export default Snow