/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import { CatImg, GitImg, UhpImg } from "../assets/index.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.css";

const p_data = [
  {
    img: UhpImg,
    p_url: "https://unitedhouseproductions.com",
    git_url: "https://github.com/akleventis/united_house_server",
    text: "United House Productions LLC Go RESTful API backend server for live front-end application (hyperlink above). Stripe checkout integration for secure client-side purchasing. Postgresql database for storing products, events, and dj information. Features IP address rate limiting, auth token requests for admin actions, and unit tests (wip)",
    langs: [
      { Name: "Go", URL: "https://go.dev/" },
      { Name: "Postgresql", URL: "https://www.postgresql.org/" },
    ],
  },
  {
    img: CatImg,
    p_url: "",
    git_url: "https://alexcod.es/reactapi-github",
    text: "wip",
    langs: [{ Name: "React", URL: "https://reactjs.org/" }],
  },
];

export const Project = ({ img, p_url, git_url, text, langs }) => {
  return (
    <div data-aos={"zoom-in"} data-aos-duration="800" className="box">
      <a href={git_url} rel="noreferrer" target="_blank" style={{ backgroundImage: `url(${GitImg})` }} className="git" ></a>
      <a href={p_url} rel="noreferrer" target="_blank" name="site-link" className="p-img-container" >
        <img src={img} className="p_img" alt="" />
      </a>
      <p className="text">{text}</p>
      <div className="lang">
        {langs.map((item, index) => {
          return <a key={index} href={item.URL} rel="noreferrer" target="_blank">{item.Name}</a>
        })}
      </div>
    </div>
  );
};

class Projects extends React.Component {
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
        <a href="#projects" id="projects"></a>
        <div className="inner two">
          <h4>Projects</h4>
          <div className="row">
            {p_data.map((item, index) => {
              return <Project img={item.img} key={index} p_url={item.p_url} git_url={item.git_url} text={item.text} langs={item.langs} />
            })}
          </div>
          <p className="more">
            - more side projects @{" "}
            <a
              className="in-link"
              href="http://alexcod.es/github"
              rel="noreferrer"
              target="_blank"
            >
              alexcod.es/github{" "}
            </a>
            -
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
