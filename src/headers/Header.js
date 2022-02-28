import React from "react";
import Navbar from "./navbar/Navbar"
import Terminal from "../terminal/Terminal"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    };
    



    render() {
        return (
            <header>
                <Navbar></Navbar>
                <Terminal></Terminal>
            </header>
        );
    }
}

export default Header;