/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react"
import dog from "../Images/dog.png"
import cat from "../Images/cat.png"
import site from "../Images/site.png"
import git from "../Images/git.png"
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
        duration: 1500
      });
    }

    render() {
        return (
            
            <div className="outer">
            <a href="#projects" id="projects"></a>  
              <div className="inner two">
                <h4>Projects</h4>
                <div className="row">
                  <div data-aos={"zoom-in"} className="box">
                    <a href="https://github.com/akleventis/Cat-Dog-Service" rel="noreferrer" target="_blank" style={{backgroundImage: `url(${git})`}} className="git"></a>
                    <img src={dog} alt="dog" />
                    <p className="text">
                      RESTful API developed with Spring boot as a foundation for simple CRUD operations on a database. Client is able to add, update, and
                      delete the cats and dogs stored in the database. Organized by controller, entity, repository, and service packages.
                    </p>
                    <div className="lang">
                      <a href="https://www.oracle.com/java/" rel="noreferrer" target="_blank">Java</a>
                      <a href="https://en.wikipedia.org/wiki/SQL" rel="noreferrer" target="_blank">SQL</a>
                      <a href="https://spring.io/" rel="noreferrer" target="_blank">Spring</a>
                    </div>
                  </div>
                  <div data-aos={"zoom-in"} className="box">
                    <a href="https://alexcod.es/reactapi-github" rel="noreferrer" target="_blank" style={{backgroundImage: `url(${git})`}} className="git"></a>
                    <img src={cat} alt="cat" />
                    <a href="https://alexcod.es/reactapi" rel="noreferrer" target="_blank" style={{backgroundImage: `url(${site})`}} name="site-link" className="site-link"></a>
                    <p className="text">
                      Interactive website built with React & TypeScript that fetches and displays images from these <b><a className="in-link" href="https://thecatapi.com/" target="blank">cat</a></b> and <b><a href="https://thedogapi.com/" className="in-link" target="blank">dog</a></b> API's. User is able to interact with site through UI or keyboard. 
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