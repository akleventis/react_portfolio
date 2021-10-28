/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import bitly from "../Images/bitly.png";
import pylogo from "../Images/pylogo.png";
import gologo from "../Images/gologo.png";
import waketech from "../Images/wake.png";
import javalogo from "../Images/javalogo.png";
import jslogo from "../Images/jslogo.png";
import mariadb from "../Images/mariadb.png";
import reactlogo from "../Images/reactlogo.png";
import "./resume.css";
import link from "../Images/site.png";
import resume from "../Documents/resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    AOS.init({
      duration: 1500,
    });
  }

  render() {
    return (
      <div className="outer">
        <a id="resume"></a>
        <div className="inner one">
          <div className="r-header">
            <a target='_blank' rel='noreferrer' href={resume}>
              <h4>Resume</h4>
            </a>

            <a
              href={resume}
              style={{ backgroundImage: `url(${link})` }}
              target="_blank"
              name="site-link"
              className="site-link r-link"
              rel="noreferrer"
            ></a>
          </div>

          {/* --------------------SECTION------------------------ */}

          <h5>Languages & Tools</h5>
          <div className="lang-container">
            <a href="https://www.javascript.com/" rel="noreferrer" target="_blank" alt="source">
              <img data-aos={"zoom-in"} src={jslogo} height="50px" width="50px" alt="JavaScript logo" />
            </a>
            <a href="https://reactjs.org/" rel="noreferrer" target="_blank" alt="source">
              <img data-aos={"zoom-in"} src={reactlogo} height="50px" width="50px" alt="React logo" />
            </a>
            <a href="https://www.python.org/" rel="noreferrer" target="_blank" alt="source">
              <img data-aos={"zoom-in"} src={pylogo} height="50px" width="50px" alt="python logo" />
            </a>
            <a href="https://golang.org/" rel="noreferrer" target="_blank" alt="source">
              <img data-aos={"zoom-in"} src={gologo} height="50px" width="50px" alt="golang logo" />
            </a>
            <a href="https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html" rel="noreferrer" target="_blank" alt="source">
              <img data-aos={"zoom-in"} src={javalogo} height="50px" width="50px" alt="java logo" />
            </a>
            <a href="https://mariadb.org/" rel="noreferrer" target="_blank" alt="source">
              <img data-aos={"zoom-in"} src={mariadb} height="50px" width="50px" alt="mariadb logo" />
            </a>
          </div>

          <h5>Technical</h5>
          <div className="lang-container">
            <p className="lp">Git Workflows</p>
            <p className="lp">Agile Software Development</p>
          </div>
          <h5>General</h5>
          <div className="lang-container">
            <p className="lp">Team player</p>
            <p className="lp">Research-oriented</p>
            <p className="lp">Quality Assurance</p>
            <p className="lp">Great Communicator</p>
            <p className="lp">Logical Reasoning</p>
          </div>

          <h5>Experience</h5>
          <div>
            <a href="https://bitly.com/" rel="noreferrer" target="_blank">
              <img className="logo" src={bitly} height="50px" width="50px" alt="bitly" />
            </a>
            <p className="h-span">
              <b>Bitly</b>
              <span>Summer 2021</span>
            </p>
            <p className="h-span">
              <i>Back-End Engineering Intern</i>
              <span>Remote</span>
            </p>
          </div>
          <ul className="experience">
            <li>Contributed to alpha release for new Bitly product expected to launch Q4 2021 (Go, MariaDB)</li>
            <a href="https://golang.org/" target="_blank" rel="noreferrer" className="code">
              Go
            </a>
            <li>Migrated all back-end systems to a new email api client (Go)</li>
            <li> Created new rest api endpoints in a microservice architecture (Go)</li>
            <a href="https://www.python.org/" target="_blank" rel="noreferrer" className="code">
              Python
            </a>
            <li>Built script to automate data creation and updates from a static file (Python)</li>
            <li>Managed data models used across back-end services (Go)</li>
            <a href="https://mariadb.org/" target="_blank" rel="noreferrer" className="code">
              MariaDB
            </a>
          </ul>

          {/* --------------------SECTION------------------------ */}

          <h5>Education</h5>
          <div>
            <a href="https://www.waketech.edu/" rel="noreferrer" target="_blank">
              <img className="logo" id="wake" src={waketech} height="50px" width="50px" alt="waketech" />
            </a>
            <p className="h-span">
              <b>Wake Technical Community College</b>
              <span>2020 - 2022</span>
            </p>
            <p className="h-span">
              <i>AAS in Computer Programming and Development</i>
              <span>Raleigh, Nc</span>
            </p>
          </div>
          <p className="c-lst">Related Coursework</p>
          <ul className="lst">
            <li>Advanced Python & Java Programming</li>
            <a href="https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html" target="_blank" rel="noreferrer" className="code">
              Java
            </a>
            <li>Computing Fundamentals I & II</li>
            <li>Database Programming</li>
            <a href="https://www.python.org/" rel="noreferrer" target="_blank" className="code">
              Python
            </a>
            <li>Web Markup and Scripting</li>
            <li>Software Quality Assurance</li>
            <a href="https://www.javascript.com/" rel="noreferrer" target="_blank" className="code">
              JavaScript
            </a>
            <li>Software Development</li>
            <li>Web, Pgm, Db Foundation</li>
            <a href="https://en.wikipedia.org/wiki/SQL" rel="noreferrer" target="_blank" className="code">
              SQL
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Resume;
