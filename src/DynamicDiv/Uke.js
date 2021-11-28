import React from "react"
import AOS from 'aos';
import "aos/dist/aos.css";
import uke from "../Images/uke.jpg"
import youtube from "../Images/youtube.png"

import "./dynamicDiv.css"


class Uke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        AOS.init({
          duration: 800
        });
      }


    render () {
        return( 
            <div className="code_container">
                <a className="img-link" href="https://youtu.be/zcLkoWz_v38" width="200px"target="_blank" rel="noreferrer">
                    <img data-aos={"zoom-in"} className="inner_image" src={youtube} alt="youtube"/>
                </a>
                <img className="my_image_click" src={uke} alt="uke" />
            </div>
      )
    }
}


export default Uke