import React from 'react';
import './resume.css';
import {
  SiteImg,
  BitlyImg,
  PyImg,
  GoImg,
  WakeImg,
  SqlImg,
  ReactImg,
  UsafImg,
  NextImg
} from '../assets/index.js';
import resume from '../docs/resume.pdf';
import transcript from '../docs/transcript.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

let resumeBullets = [
  'Architect and implement RESTful services in Go within a microservices ecosystem.',
  'Assist in migrating services from Python to Go, enhancing performance and tech stack maintainability.',
  'Led team in upgrading Bitly’s anonymous shortener system, significantly improving site security.',
  'Integrated Optimizely’s Feature Experimentation service, enabling streamlined A/B testing across applications. (Go)',
  'Integrated Gemini AI for domain generation, driving major product upgrades. (Go)',
  'Developed admin tooling to automate metric population in dev environments, boosting developer and QA efficiency.',
  'Active member of a rotating on-call shift for DDoS attack and server mitigation',
]

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
              style={{ backgroundImage: `url(${SiteImg})` }}
              target="_blank"
              name="site-link"
              className="site-link r-link"
              rel="noreferrer"
            >
              {' '}
            </a>
          </div>

          {/* --------------------SECTION------------------------ */}

          <h5>Languages & Frameworks</h5>
          <div className="lang-container">
            <a href="https://golang.org/" rel="noreferrer" target="_blank" alt="source">
              <img
                data-aos={'zoom-in'}
                data-aos-duration="400"
                src={GoImg}
                height="50px"
                width="50px"
                alt="golang logo"
              />
            </a>
            <a href="https://reactjs.org/" rel="noreferrer" target="_blank" alt="source">
              <img
                data-aos={'zoom-in'}
                data-aos-duration="1000"
                src={ReactImg}
                height="50px"
                width="50px"
                alt="React logo"
              />
            </a>
            <a href="https://nextjs.org/" rel="noreferrer" target="_blank" alt="source">
              <img
                data-aos={'zoom-in'}
                data-aos-duration="700"
                src={NextImg}
                height="50px"
                width="50px"
                alt="JavaScript logo"
              />
            </a>
            <a href="https://www.python.org/" rel="noreferrer" target="_blank" alt="source">
              <img
                data-aos={'zoom-in'}
                data-aos-duration="1300"
                src={PyImg}
                height="50px"
                width="50px"
                alt="python logo"
              />
            </a>
            <a
              href="https://en.wikipedia.org/wiki/SQL"
              rel="noreferrer"
              target="_blank"
              alt="source"
            >
              <img
                data-aos={'zoom-in'}
                data-aos-duration="1900"
                src={SqlImg}
                height="50px"
                width="50px"
                alt="sql logo"
              />
            </a>
          </div>

          <h5>General</h5>
          <section className="lang-container">
            <p className="lp gen">Team player</p>
            <p className="lp gen">Analytical</p>
            <p className="lp gen">Research-oriented</p>
          </section>

          <h5>Technical</h5>
          <section className="lang-container">
            <a href="https://git-scm.com/" rel="noreferrer" target="_blank">
              <p className="lp">Git Workflows</p>
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Agile_software_development"
              rel="noreferrer"
              target="_blank"
            >
              <p className="lp">Agile Software Development</p>
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Representational_state_transfer"
              rel="noreferrer"
              target="_blank"
            >
              <p className="lp">RESTful Architecture</p>
            </a>
          </section>
          <section className="lang-container">
            <a href="https://www.atlassian.com/software/jira" rel="noreferrer" target="_blank">
              <p className="lp">Jira Software</p>
            </a>
            <a href="https://cloud.google.com/" rel="noreferrer" target="_blank">
              <p className="lp">Google Cloud Platform</p>
            </a>
          </section>
          {/* --------------------SECTION------------------------ */}

          <h5>Experience</h5>
          <div>
            <a href="https://bitly.com/" rel="noreferrer" target="_blank">
              <img className="logo" src={BitlyImg} height="40px" width="40px" alt="bitly" />
            </a>
            <p className="h-span">
              <b>Bitly</b>
              <span>November 2022 - Present</span>
            </p>
            <p className="h-span">
              <i>Intern - Backend Software Engineer III</i>
              <span>Denver, Co</span>
            </p>
          </div>

          <ul>
            {resumeBullets.map((bullet, index) => (
                <li>
                  <span key={index}>{bullet}</span>
                </li>
            ))}
            <a
              href="https://golang.org/"
              data-aos={'flip-down'}
              data-aos-duration="1200"
              style={{ top: '0%' }}
              target="_blank"
              rel="noreferrer"
              className="code"
            >
              Go
            </a>
            <a
              href="https://www.python.org/"
              data-aos={'flip-down'}
              style={{ top: '15%' }}
              data-aos-duration="1200"
              target="_blank"
              rel="noreferrer"
              className="code"
            >
              Python
            </a>
            <a
              href="https://nextjs.org/"
              data-aos={'flip-down'}
              style={{ top: '30%' }}
              data-aos-duration="1200"
              target="_blank"
              rel="noreferrer"
              className="code"
            >
              Next.js
            </a>
            <a
              href="https://mariadb.org/"
              data-aos={'flip-down'}
              style={{ top: '45%' }}
              data-aos-duration="1200"
              target="_blank"
              rel="noreferrer"
              className="code"
            >
              MariaDB
            </a>
            <a
              href="https://cloud.google.com"
              data-aos={'flip-down'}
              style={{ top: '60%' }}
              data-aos-duration="1200"
              target="_blank"
              rel="noreferrer"
              className="code"
            >
              GCP
            </a>
            <a
              href="https://github.com/"
              data-aos={'flip-down'}
              style={{ top: '75%' }}
              data-aos-duration="1200"
              target="_blank"
              rel="noreferrer"
              className="code"
            >
              GitHub
            </a>
          </ul>

          <div style={{marginTop: '25px'}}>
            <a href="https://www.af.mil/" rel="noreferrer" target="_blank">
              <img className="logo" src={UsafImg} height="40px" width="40px" alt="bitly" />
            </a>
            <p className="h-span">
              <b>United States Air Force</b>
              <span>March 2016 - March 2020</span>
            </p>
            <p className="h-span">
              <i><a href="https://foreverwingman.com/career_fields/2w1x1-aircraft-armament-systems/" rel="noreferrer" target="_blank">Aircraft Armament Systems </a></i>
              <span>Goldsboro, Nc</span>
            </p>
          </div>
          <ul>
            <li>
              <span>
              Managed and serviced weapon systems and munitions equipment for the F-15 fighter jet.
              </span>
            </li>
          </ul>
          {/* --------------------SECTION------------------------ */}

          <h5>Education</h5>
          <div>
            <a href="https://www.waketech.edu/" rel="noreferrer" target="_blank">
              <img
                className="logo"
                id="wake"
                src={WakeImg}
                height="40px"
                width="40px"
                alt="waketech"
              />
            </a>
            <p className="h-span">
              <b>Wake Technical Community </b>
              <span>2020 - 2022</span>
              <b>College</b>
            </p>
            <p className="h-span">
              <i>
                <a href="https://www.waketech.edu/programs-courses/credit/computer-programming/degrees-programs/a25590cp">
                  AAS in Computer Programming and Development{' '}
                </a>
              </i>
              <span>Raleigh, Nc</span>
            </p>
          </div>
          <ul>
            <li>
              <span>
              Proficiently acquired knowledge in Java, HTML/CSS, SQL, RESTful services, and unit testing.
              </span>
            </li>
            <li>
              <span>
              Developed hands-on versatility in all-around software development.
              </span>
            </li>
            <li>
              <span>
              <a target="_blank" rel="noreferrer" href={transcript}>
                View transcript {" "}
              <img
                src={SiteImg}
                height="15px"
                width="15px"
                alt="transcript hyperlink"
                ></img>
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Resume;
