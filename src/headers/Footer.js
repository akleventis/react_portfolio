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
              © 2026<span className="link"><a href="https://rd.tooper.io/linkedin" rel="noreferrer" target="_blank">LinkdIn</a></span
              ><span className="link"><a href="https://rd.tooper.io/github" rel="noreferrer" target="_blank">Github</a></span>
            </p>
          </footer>
        )
    }
};

export default Footer