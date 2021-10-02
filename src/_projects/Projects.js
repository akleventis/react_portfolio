/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import dog from "../Images/dog.png"
import cat from "../Images/cat.png"
import site from "../Images/site.png"
import git from "../Images/git.png"
import AOS from 'aos';
import "./projects.css"

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount(){
        AOS.init();
    }


    render() {
        return (
            
            <div class="outer">
            <a id="projects"></a>  
              <div class="inner two">
                <h4>Projects</h4>
                <div class="row">
                  <div data-aos="zoom-in" data-aos-duration="1500" class="box">
                    <a href="https://github.com/akleventis/Cat-Dog-Service" target="_blank" style={{backgroundImage: `url(${git})`}} class="git"></a>
                    <img src={dog} alt="dog" />
                    <p class="text">
                      RESTful API developed with Spring boot as a foundation for simple CRUD operations on a database. Client is able to add, update, and
                      delete the cats and dogs stored in the database. Organized by controller, entity, repository, and service packages.
                    </p>
                    <div class="lang">
                      <a href="https://www.oracle.com/java/" target="_blank">Java</a>
                      <a href="https://en.wikipedia.org/wiki/SQL" target="_blank">SQL</a>
                      <a href="https://spring.io/" target="_blank">Spring</a>
                    </div>
                  </div>
                  <div data-aos="zoom-in" data-aos-duration="1500" class="box">
                    <a href="https://alexcod.es/reactapi-github" target="_blank" style={{backgroundImage: `url(${git})`}} class="git"></a>
                    <img src={cat} alt="cat" />
                    <a href="https://alexcod.es/reactapi" target="_blank" style={{backgroundImage: `url(${site})`}} name="site-link" class="site-link"></a>
                    <p class="text">
                      Interactive website built with React & TypeScript that fetches and displays images from these <b><a class="in-link" href="https://thecatapi.com/" target="blank">cat</a></b> and <b><a href="https://thedogapi.com/" class="in-link" target="blank">dog</a></b> API's. User is able to interact with site through UI or keyboard. 
                    </p>
                    <div class="lang">
                      <a href="https://reactjs.org/" target="_blank">React</a>
                      <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
                    </div>
                  </div>
                  
                </div>
                <p class="more">- more side projects @ <a class="in-link" href="http://alexcod.es/github" target="_blank">alexcod.es/github </a>-</p>
                </div>
                
              </div>
        )
    }
};

export default Projects