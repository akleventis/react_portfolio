import React from "react"
import "./dynamicDiv.css"


class Raleigh extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206989.87646166902!2d-78.785140231539!3d35.84368666207371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f7%3A0x6790b6528a11f0ad!2sRaleigh%2C%20NC!5e0!3m2!1sen!2sus!4v1633447863939!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowfullscreen="" title="Raleigh" className="my_image_click" loading="lazy"></iframe>
    }
}


export default Raleigh