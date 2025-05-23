/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import { AutoTab, GitImg, LanImg, NfcImg, UhpImg } from "../assets/index.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.css";

const p_data = [
  {
    img: LanImg,
    p_url: "https://github.com/akleventis/lan_mac_remote",
    git_url: "https://github.com/akleventis/lan_mac_remote",
    text: "Remote control for Mac over a local network. Supports triggering media key presses and OS events on a connected Mac running the server via HTTP over TCP/IP.",
    langs: [{ Name: "Go", URL: "https://go.dev/" }, { Name: "Next.js", URL: "https://nextjs.org/" }, { Name: "Electron", URL: "https://www.electronjs.org/" }],
  },
  {
    img: NfcImg,
    p_url: "https://github.com/akleventis/nfc_v1",
    git_url: "https://github.com/akleventis/nfc_v1",
    text: "Virtual letters in the form of a Near Field Communtion (NFC) tag. Scanning these tags redirects the user to a new page through cookie manipulation. The combination of Contentful CMS and Next.js enables dynamic route / page updates.",
    langs: [{ Name: "Next.js", URL: "https://nextjs.org/" }, { Name: "Contentful", URL: "https://www.contentful.com/" }],
  },
  {
    img: AutoTab,
    p_url: "https://bit.ly/auto-tab-groups",
    git_url: "https://github.com/furofo/TabGroupExtension",
    text: "Updated Chrome Auto Tab Group Extension with enhanced features, increasing user count from ~100 to 1000+ while maintaining a 4.5-star rating. Improved styling, added multi-group support, zoom, ungrouping on no matching URL text, and an overall codebase clean-up.",
    langs: [{ Name: "JavaScript", URL: "https://www.javascript.com/" }, { Name: "HTML/CSS", URL: "https://www.w3.org/standards/webdesign/htmlcss" }],
  },
  {
    img: UhpImg,
    p_url: "https://unitedhouseproductions.com",
    git_url: "https://github.com/akleventis/united_house_productions",
    text: "Contract project for United House Productions LLC. Built a React-based landing page with Contentful CMS for easy content updates. Integrated an email booking form for agent inquiries. Site supported 10 successfully hosted events.",
    langs: [
      { Name: "Javascript", URL: "https://www.javascript.com/" },
      { Name: "React", URL: "https://reactjs.org/" },
    ],
  },
  // {
  //   img: NaotImg,
  //   p_url: "https://mynaot.com",
  //   git_url: "https://github.com/akleventis/naot_tc",
  //   text: "Contracted by the National Association of Orthopaedic Technologists (NAOT). Built a marketing website using Next.js and Material UI with automated deployment via Netlify. Integrated Stripe for payments and configured a domain-linked email campaign.",
  //   langs: [{ Name: "Next.js", URL: "https://nextjs.org/" }, { Name: "MaterialUI", URL: "https://mui.com/" }],
  // },
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
            - more @{" "}
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
