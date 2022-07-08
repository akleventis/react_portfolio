/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react"
import { DogImg, CatImg, SiteImg, GitImg } from "../assets/index.js"
import AOS from 'aos';
import "aos/dist/aos.css";
import "./projects.css"

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount() {
      AOS.init({
        duration: 0
      });
    }

    render() {
        return (
            
            <div className="outer">
            <a href="#projects" id="projects"></a>  
              <div className="inner two">
                <h4>Projects</h4>
                <div className="row">
                  <div data-aos={"zoom-in"} data-aos-duration="800" className="box">
                    <a href="https://alexcod.es/go_restapi" rel="noreferrer" target="_blank" style={{backgroundImage: `url(${GitImg})`}} className="git"></a>
                    <img src={DogImg} alt="dog" />
                    {/* <p className="text">
                      Go REST API with MySql database. Endpoint and handler functions for GET, POST, PATCH, and DELETE requests. Integrated test files for all handlers. Hit endpoints with Postman to verify correct HTTP codes/database actions.
                    </p> */}
                    <p className="text">
                      wip
                    </p>
                    <div className="lang">
                      <a href="https://go.dev/" rel="noreferrer" target="_blank">Go</a>
                      <a href="https://en.wikipedia.org/wiki/SQL" rel="noreferrer" target="_blank">SQL</a>
                    </div>
                  </div>
                  <div data-aos={"zoom-in"} data-aos-duration="800" className="box">
                    <a href="https://alexcod.es/reactapi-github" rel="noreferrer" target="_blank" style={{backgroundImage: `url(${GitImg})`}} className="git"></a>
                    <img src={CatImg} alt="cat" />
                    <a href="https://alexcod.es/reactapi" rel="noreferrer" target="_blank" style={{backgroundImage: `url(${SiteImg})`}} name="site-link" className="site-link"></a>
                    {/* <p className="text">
                      Interactive website built with React & TypeScript that fetches and displays assets/images from these <b><a className="in-link" href="https://thecatapi.com/" target="blank">cat</a></b> and <b><a href="https://thedogapi.com/" className="in-link" target="blank">dog</a></b> API's. User is able to interact with site through UI or keyboard. 
                    </p> */}
                    <p className="text">
                      wip
                    </p>
                    <div className="lang">
                      <a href="https://reactjs.org/" rel="noreferrer" target="_blank">React</a>
                      <a href="https://www.typescriptlang.org/" rel="noreferrer"  target="_blank">TypeScript</a>
                    </div>
                  </div>
                  
                </div>
                <p className="more">- more side projects @ <a className="in-link" href="http://alexcod.es/github" rel="noreferrer" target="_blank">alexcod.es/github </a>-</p>
                </div>
                
              </div>
        )
    }
};

export default Projects