/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import bitly from "../Images/bitly.png"
import waketech from "../Images/wake.png"
import "./resume.css"
import link from "../Images/site.png"
import resume from "../Documents/resume.pdf"

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="outer">
        <a id="resume"></a>
        <div className="inner one">
          <div className="r-header">
            <h4>Resume</h4>
            <a href={resume} style={{backgroundImage: `url(${link})`}} target="_blank" name="site-link" className="site-link r-link" rel="noreferrer"></a>
          </div>
          <h5>Education</h5>
          <div>
            <a href="https://www.waketech.edu/" rel="noreferrer" target="_blank">
              <img className="logo" id="wake" src={waketech} height="50px" width="50px" alt="waketech" />
            </a>
            <p>
              <b>Wake Technical Community College</b>
              <span>2020 - 2022</span>
            </p>
            <p>
              <i>AAS in Computer Programming and Development</i>
              <span>Raleigh, Nc</span>
            </p>
          </div>
          <p className="c-lst">Related Coursework</p>
          <ul className="lst">
            <li>Computing Fundamentals</li>
            <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer" className="code">
              Java
            </a>
            <li>Web, Pgm, Db Foundation</li>
            <li>Operating Systems Concepts</li>
            <a href="https://www.python.org/" rel="noreferrer" target="_blank" className="code">
              Python
            </a>
            <li>Network and Security Foundation</li>
            <li>Database Programming</li>
            <a href="https://www.javascript.com/" rel="noreferrer" target="_blank" className="code">
              JavaScript
            </a>
            <li>Web Markup and Scripting</li>
            <li>Software Quality Assurance</li>
            <a href="https://en.wikipedia.org/wiki/SQL" rel="noreferrer" target="_blank" className="code">
              SQL
            </a>
            <li>Software Development</li>
            <li>Advanced Python & Java Programming</li>
            <a href="https://www.w3.org/standards/webdesign/htmlcss.html" rel="noreferrer" target="_blank" className="code">
              HTML & CSS
            </a>
          </ul>
          <h5>Education</h5>
          <div>
            <a href="https://www.waketech.edu/" rel="noreferrer" target="_blank">
              <img className="logo" id="wake" src={waketech} height="50px" width="50px" alt="waketech" />
            </a>
            <p>
              <b>Wake Technical Community College</b>
              <span>2020 - 2022</span>
            </p>
            <p>
              <i>AAS in Computer Programming and Development</i>
              <span>Raleigh, Nc</span>
            </p>
          </div>
          <p className="c-lst">Related Coursework</p>
          <ul className="lst">
            <li>Computing Fundamentals</li>
            <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer" className="code">
              Java
            </a>
            <li>Web, Pgm, Db Foundation</li>
            <li>Operating Systems Concepts</li>
            <a href="https://www.python.org/" rel="noreferrer" target="_blank" className="code">
              Python
            </a>
            <li>Network and Security Foundation</li>
            <li>Database Programming</li>
            <a href="https://www.javascript.com/" rel="noreferrer" target="_blank" className="code">
              JavaScript
            </a>
            <li>Web Markup and Scripting</li>
            <li>Software Quality Assurance</li>
            <a href="https://en.wikipedia.org/wiki/SQL" rel="noreferrer" target="_blank" className="code">
              SQL
            </a>
            <li>Software Development</li>
            <li>Advanced Python & Java Programming</li>
            <a href="https://www.w3.org/standards/webdesign/htmlcss.html" rel="noreferrer" target="_blank" className="code">
              HTML & CSS
            </a>
          </ul>
          <h5>Experience</h5>
          <div>
            <a href="https://bitly.com/" rel="noreferrer" target="_blank">
              <img className="logo" src={bitly} height="50px" width="50px" alt="bitly" />
            </a>
            <p>
              <b>Bitly</b>
              <span>Summer 2021</span>
            </p>
            <p>
              <i>Back-End Engineering Intern</i>
              <span>Remote</span>
            </p>
          </div>
          <ul className="experience">
            <li>Contributed to alpha release for new Bitly product expected to launch Q4 2021 (Go, MariaDB)</li>
            <li>Migrated all back-end systems to a new email api client (Go)</li>
            <a href="https://golang.org/" target="_blank" rel="noreferrer" className="code">
              Go
            </a>
            <li> Created new rest api endpoints in a microservice architecture (Go)</li>
            <li>Built script to automate data creation and updates from a static file (Python)</li>
            <a href="https://www.python.org/" target="_blank"  rel="noreferrer" className="code">
              Python
            </a>
            <li>Managed data models used across back-end services (Go)</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Resume;
