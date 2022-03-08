import React from "react";
import bitly from "../assets/images/bitly.png";
import pylogo from "../assets/images/pylogo.png";
import gologo from "../assets/images/gologo.png";
import waketech from "../assets/images/wake.png";
import javalogo from "../assets/images/javalogo.png";
import jslogo from "../assets/images/jslogo.png";
import sql from "../assets/images/sql.png";
import reactlogo from "../assets/images/reactlogo.png";
import "./resume.css";
import link from "../assets/images/site.png";
import resume from "../docs/resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    AOS.init({
      duration: 0,
    });
  }

  render() {
    return (
      <div className="outer">
        <div className="inner one">
          <div className="r-header">
            <a target="_blank" rel="noreferrer" href={resume}>
              <h4>Resume</h4>
            </a>

            <a
              href={resume}
              style={{ backgroundImage: `url(${link})` }}
              target="_blank"
              name="site-link"
              className="site-link r-link"
              rel="noreferrer"
            > </a>
          </div>

          {/* --------------------SECTION------------------------ */}

          <h5>Languages & Tools</h5>
          <div className="lang-container">
            <a href="https://golang.org/" rel="noreferrer" target="_blank" alt="source">
              <img data-aos={"zoom-in"} data-aos-duration="400" src={gologo} height="50px" width="50px" alt="golang logo" />
            </a>
            <a href="https://www.javascript.com/" rel="noreferrer" target="_blank" alt="source">
              <img data-aos={"zoom-in"} data-aos-duration="700" src={jslogo} height="50px" width="50px" alt="JavaScript logo" />
            </a>
            <a href="https://reactjs.org/" rel="noreferrer" target="_blank" alt="source">
              <img data-aos={"zoom-in"} data-aos-duration="1000" src={reactlogo} height="50px" width="50px" alt="React logo" />
            </a>
            <a href="https://www.python.org/" rel="noreferrer" target="_blank" alt="source">
              <img data-aos={"zoom-in"} data-aos-duration="1300" src={pylogo} height="50px" width="50px" alt="python logo" />
            </a>
            <a href="https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html" rel="noreferrer" target="_blank" alt="source">
              <img data-aos={"zoom-in"} data-aos-duration="1600" src={javalogo} height="50px" width="50px" alt="java logo" />
            </a>
            <a href="https://en.wikipedia.org/wiki/SQL" rel="noreferrer" target="_blank" alt="source">
              <img data-aos={"zoom-in"} data-aos-duration="1900" src={sql} height="50px" width="50px" alt="sql logo" />
            </a>
          </div>

          <h5>Technical</h5>
          <section className="lang-container">
            <p className="lp">Git Workflows</p>
            <p className="lp">Agile Software Development</p>
          </section>
          <h5>General</h5>
          <section className="lang-container">
            <p className="lp gen">Team player</p>
            <p className="lp gen">Analytical</p>
            <p className="lp gen">Research-oriented</p>
            <p className="lp gen">Quality Assurance</p>
          </section>

          {/* --------------------SECTION------------------------ */}

          <h5>Experience</h5>
          <div>
          <a href="https://bitly.com/" rel="noreferrer" target="_blank">
          <img className="logo" src={bitly} height="40px" width="40px" alt="bitly" />
           </a>
            <p className="h-span">
              <b>Bitly</b>
              <span>Summer 2021 - Present</span>
            </p>
            <p className="h-span">
              <i>Back-End Engineering Intern</i>
              <span>Remote</span>
            </p>
          </div>


          <ul>
            <li><span>Go back-end development for Micro services</span></li>
            <li><span>
              Contributed to alpha release for new Bitly product{" "}
              <a style={{ fontStyle: "italic" }} href="https://bit.ly/link_launchpad_blog" target="_blank" rel="noreferrer">
                "Link Launchpads"
              </a></span>
            </li>
            <li><span>Involved in migration of Python based architecture to Go</span></li>
            <li><span>Go automated unit test functions</span></li>
            <li><span>GitHub and Jenkins for the continuous integration and deployment</span></li>
            <a href="https://golang.org/" data-aos={"flip-down"} data-aos-duration="1200" style={{top: '10%'}} target="_blank" rel="noreferrer" className="code">
              Go
            </a>
            <a href="https://www.python.org/" data-aos={"flip-down"} style={{top: '43%'}} data-aos-duration="1200" target="_blank" rel="noreferrer" className="code">
              Python
            </a>
            <a href="https://en.wikipedia.org/wiki/SQL" data-aos={"flip-down"} style={{top: '76%'}} data-aos-duration="1200" target="_blank" rel="noreferrer" className="code">
              SQL
            </a>
          </ul>

          {/* --------------------SECTION------------------------ */}

          <h5>Education</h5>
          <div>
          <a href="https://www.waketech.edu/" rel="noreferrer" target="_blank">
          <img className="logo" id="wake" src={waketech} height="40px" width="40px" alt="waketech" />
            </a>
            <p className="h-span">
              <b>Wake Tech Community </b>
              <span>2020 - 2022</span>
              <b>College</b>
            </p>
            <p className="h-span">
            <i>AAS in Computer Programming </i>
            <span>Raleigh, Nc</span>
            <i>and Development</i>
            </p>
          </div>


          <ul>
            <li><span>Advanced Python & Java Programming</span></li>
            <li><span>Computing Fundamentals I & II</span></li>
            <li><span>Database Programming</span></li>
            <li><span>Web Markup and Scripting (JavaScript)</span></li>
            <li><span>Software Quality Assurance</span></li>
            <a href="https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html" data-aos={"flip-down"} data-aos-duration="1200" style={{top: '0%'}} target="_blank" rel="noreferrer" className="code">
              Java
            </a>
            <a href="https://www.python.org/" data-aos={"flip-down"} data-aos-duration="1200" style={{top: '28%'}} rel="noreferrer" target="_blank" className="code">
              Python
            </a>
            <a href="https://en.wikipedia.org/wiki/SQL" data-aos={"flip-down"} data-aos-duration="1200" style={{top: '56%'}} rel="noreferrer" target="_blank" className="code">
              SQL
            </a>
            <a href="https://www.javascript.com/" data-aos={"flip-down"} data-aos-duration="1200" style={{top: '84%'}} rel="noreferrer" target="_blank" className="code">
              JavaScript
            </a> 
          </ul>
        </div>
      </div>
    );
  }
}

export default Resume;
