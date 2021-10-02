import React from "react";
import "./terminal.css";
import Typewriter from 'typewriter-effect/dist/core';
import AOS from 'aos';


class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    AOS.init();

    let lst1 = [
        ["1", '> print("hey i\'m alex")'],
        ["2", "> print(location)"],
        ["3", "> print(interests)"],
        ["4", "> print(degree)"],
        ["5", "> print(resume)"],
        ["6", "> print(links)"],
        ["7", "> print(email)"],
        ["8", "> alex.image()"],
        ["9", "> "],
      ];
      
      let lst2 = [
        ["a", " hey i'm alex"],
        ["b", " Raleigh, Nc"],
        ["c", ' ["Reading", "Snowboarding", "Biking", "Coding", "Piano", "Ukulele"]'],
        ["d", " Associates of Applied Science in Computer Programming and Development"],
        ["e", '<a href="document/resume.pdf" target="_blank">resume.pdf</a>'],
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
            {/* <i id="h" onclick="img()"></i> */}
            <i id="h"></i>
            <p id="9"></p>
          </div>
          <div id="my_image"></div>
        </div>
      </div>
    );
  }
}
export default Terminal;
