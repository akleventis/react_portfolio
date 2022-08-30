import React from "react";
import "./terminal.css";
import Typewriter from 'typewriter-effect/dist/core';
import AOS from 'aos';
import "aos/dist/aos.css";
import resume from '../docs/resume.pdf'
import {Disc, Winter, Taco, Code, Travel, Piano, Ukulele, MyImage, Raleigh, Email} from '../dynamic_div/dynamicDiv.js'


class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divSection: []
    };
  }

  componentDidMount() {
    const snow = () => this.setState({divSection: <Winter />});
    const disc = () => this.setState({divSection: <Disc />});
    const taco = () => this.setState({divSection: <Taco />});
    const piano = () => this.setState({divSection: <Piano />});
    const uke = () => this.setState({divSection: <Ukulele />});
    const code = () => this.setState({divSection: <Code />});
    const travel = () => this.setState({divSection: <Travel />});
    const raleigh = () => this.setState({divSection: <Raleigh />})
    const email = () => this.setState({divSection: <Email />})

    AOS.init();

    let lst1 = [
        ["1", '> print("hey i\'m alex")'],
        ["2", "> print(resume)"],
        ["3", "> print(location)"],
        ["4", "> print(interests)"],
        ["5", "> print(degree)"],
        ["6", "> print(links)"],
        ["7", "> print(email)"],
        ["8", "> alex.image()"],
        ["9", "> "],
      ];
      
      let lst2 = [
        ["a", " hey i'm alex"],
        ["b", '<a id="r" target="_blank">resume.pdf</a>'],
        ["c", '<a id="raleigh">Raleigh, Nc</a>'],
        ["d", ' [<a id="travel">"Travel"</a>, <a id="snow">"Snow"</a>, <a id="disc">"Disc Golf"</a>, <a id="comp">"Code"</a>, <a id="taco">"Taco"</a>, <a id="piano">"Piano"</a>, <a id="uke">"Ukulele"</a>]'],
        ["e", "<a href='https://www.waketech.edu/programs-courses/credit/computer-programming' target='_blank'>Associates of Applied Science in Computer Programming and Development</a>"],
        [
          "f",
          ' [<a href="http://alexcod.es/github" target="_blank">github.com</a>, <a href="http://alexcod.es/linkedin" target="_blank">linkedin.com</a>]',
        ],
        ["g", '<a id="email">alex.leventis1@gmail.com</a>'],
        ["h", '<a>Click me!</a>'],
      ];
    
    function terminal(key, value) {
      let app = document.getElementById(key);
    
      let typewriter = new Typewriter(app, { delay: 75 });
        typewriter.typeString(value).pauseFor(2000).start();
    }
    let i = 0, j = 0;
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
      if (i===3){
        document.getElementById('r').addEventListener('click', e => {
          window.open(resume, '_blank')})
      }
      if (i === 4){
        document.getElementById('raleigh').addEventListener('click', e => {
          raleigh();
        })
      }
      if (i === 5){
        const mapping = {'snow': snow, 'taco': taco, 'disc': disc,
                          'piano': piano, 'uke': uke, 'comp': code,
                          'travel': travel};
        const ids = ['snow', 'taco', 'travel', 'piano', 'uke', 'comp', 'disc']
        ids.forEach(e => {
          document.getElementById(e).addEventListener('click', event => {
            mapping[e]();
          }) 
        })
      }
      if (i===8) {
        document.getElementById('email').addEventListener('click', e => {
          email();
        })
      }
      if (i < lst1.length) {
        setTimeout(loop, 2200);
      }
    }
    loop()
  }
  
  image = () => {
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
