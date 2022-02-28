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
              © Alex Leventis 2022<span className="link"><a href="http://alexcod.es/linkedin" rel="noreferrer" target="_blank">Linkdin</a></span
              ><span className="link"><a href="http://alexcod.es/github" rel="noreferrer" target="_blank">Github</a></span>
            </p>
          </footer>
        )
    }
};

export default Footer