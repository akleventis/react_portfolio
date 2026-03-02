import React from "react"
import "./footer.css" 

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    };



    render() {
        return (
            <footer>
            <p>
              © 2026<span className="link"><a href="https://bit.ly/4ra7y2B" rel="noreferrer" target="_blank">LinkdIn</a></span
              ><span className="link"><a href="https://bit.ly/4l5cJzH" rel="noreferrer" target="_blank">Github</a></span>
            </p>
          </footer>
        )
    }
};

export default Footer