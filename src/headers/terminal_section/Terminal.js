import React from "react";
import "./terminal.css";
import Typewriter from 'typewriter-effect/dist/core';
import AOS from 'aos';
import MyImage from '../DynamicDiv/MyImage'
import Snow from '../DynamicDiv/Snow' 
import Bike from '../DynamicDiv/Bike' 
import Paintings from '../DynamicDiv/Paintings' 
import Piano from '../DynamicDiv/Piano' 
import Uke from '../DynamicDiv/Uke' 
import resume from '../../Documents/resume.pdf'


class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divSection: []
    };
  }

  componentDidMount() {
    AOS.init();

    let lst1 = [
        ["1", '> print("hey i\'m alex")'],
        ["2", "> print(resume)"],
        // ["2", "> print(location)"],
        ["3", "> print(location)"],
        ["4", "> print(interests)"],
        ["5", "> print(degree)"],
        // ["5", "> print(resume)"],
        // ["2", "> print(location)"],
        ["6", "> print(links)"],
        ["7", "> print(email)"],
        ["8", "> alex.image()"],
        ["9", "> "],
      ];
      
      let lst2 = [
        ["a", " hey i'm alex"],
        ["b", '<a id="r" target="_blank">resume.pdf</a>'],
        ["c", " Raleigh, Nc"],
        ["d", ' ["Reading", <a id="snow">"Snowboarding"</a>, <a id="bike">"Biking"</a>, "Coding", <a id="paint">"Painting"</a>, <a id="piano">"Piano"</a>, <a id="uke">"Ukulele"</a>]'],
        ["e", " Associates of Applied Science in Computer Programming and Development"],
        // ["e", '<a id="r" target="_blank">resume.pdf</a>'],
        [
          "f",
          ' [<a href="http://alexcod.es/github" target="_blank">github.com</a>, <a href="http://alexcod.es/linkedin" target="_blank">linkedin.com</a>]',
        ],
        ["g", '<a href="mailto:alex.leventis1@gmail.com">alex.leventis1@gmail.com</a>'],
        ["h", '<a style="cursor:pointer">Click me!</a>'],
      ];
    
    function terminal(key, value) {
      let app = document.getElementById(key);
    
      let typewriter = new Typewriter(app, { delay: 75 });
        typewriter.typeString(value).pauseFor(2000).start();
    }
    let i = 0;
    let j = 0;
    function loop() {
        
      if (i > 0) {
        document.getElementById(lst1[i - 1][0]).innerHTML = lst1[i - 1][1];
      }
      if (j > 0) {
        document.getElementById(lst2[j - 1][0]).innerHTML = lst2[j - 1][1];
      }
      terminal(lst1[i][0], lst1[i][1]);
      i++;
      j++;
      if (i < lst1.length) {
        setTimeout(loop, 2200);
      }
    }
    loop();
    setTimeout(() => {
      document.getElementById("snow").addEventListener('click', e => {
        this.setState({divSection: <Snow />})
      })
      document.getElementById("bike").addEventListener('click', e => {
        this.setState({divSection: <Bike />})
      })
      document.getElementById("paint").addEventListener('click', e => {
        this.setState({divSection: <Paintings />})
      })
      document.getElementById("piano").addEventListener('click', e => {
        this.setState({divSection: <Piano />})
      })
      document.getElementById("uke").addEventListener('click', e => {
        this.setState({divSection: <Uke />})
      })
      document.getElementById("r").addEventListener('click', e => {
        window.open(resume, "_blank")})
    }, 9000)
  }



  image = () => {
    console.log("state")
    this.setState({divSection: [<MyImage key={1}/>]})
  }


  render() {
    return (
      <div id="about" className="about-container">
        <div className="terminal-container" id="t-c">
            <div data-aos="fade-right" data-aos-duration="3000" className="terminal">
            <div className="t-head-container">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p id="1"></p>
            <i id="a"></i>
            <p id="2"></p>
            <i id="b"></i>
            <p id="3"></p>
            <i id="c"></i>
            <p id="4"></p>
            <i id="d"></i>
            <p id="5"></p>
            <i id="e"></i>
            <p id="6"></p>
            <i id="f"></i>
            <p id="7"></p>
            <i id="g"></i>
            <p id="8"></p>
            <i id="h" onClick={() => this.image()}></i>
            <p id="9"></p>
          </div>

            {this.state.divSection}

        </div>
      </div>
    );
  }
}
export default Terminal;
