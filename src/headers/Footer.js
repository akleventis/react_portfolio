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
              © Alex Leventis 2021<span class="link"><a href="http://alexcod.es/linkedin" rel="noreferrer" target="_blank">Linkdin</a></span
              ><span class="link"><a href="http://alexcod.es/github" without rel="noreferrer" target="_blank">Github</a></span>
            </p>
          </footer>
        )
    }
};

export default Footer