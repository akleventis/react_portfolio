import React from "react"

import me from "../../Images/me1.png"
// import me2 from "../../Images/me2.jpg"

import "./dynamicDiv.css"


class MyImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // img: me
        };
    }

    // componentDidMount() {
    //     let x = 0;
    //     document.querySelector('input').addEventListener('change', () => {
    //         document.body.classList.toggle('light-mode');
    //         let my_img = (x%2===1) ? me : me2;
    //         x++;
    //         this.setState({img: my_img})
    //     }); 
    // }


    render () {
        return <img src={me} id="my_image" className="my_image_click" alt="profilePicture" />
    }
}


export default MyImage