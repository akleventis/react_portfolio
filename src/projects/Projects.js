/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import { AutoTab, GitImg, LanImg, NfcImg, JournalImg, UhpImg, ClosetImg } from "../assets/index.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.css";

const p_data = [
  {
    img: JournalImg,
    p_url: "https://rd.tooper.io/toop-journal",
    git_url: "https://rd.tooper.io/toop-journal",
    text: "Local-first Electrobun + AWS S3 + TypeScript desktop app managing 8 years and 3,000+ daily entries. Event-driven bidirectional sync pipeline using a pure diff planner, last-write-wins timestamps, and atomic commits. Secure multi-process RPC layer exposing SQLite and sync operations to the TypeScript renderer via a typed contract.",
    langs: [{ Name: "Electrobun", URL: "https://electrobun.dev/" }, { Name: "AWS S3", URL: "https://aws.amazon.com/s3/" }, { Name: "SQLite", URL: "https://www.sqlite.org/" }],
  },
  {
    img: ClosetImg,
    p_url: "https://closet.tooper.io",
    git_url: "https://rd.tooper.io/toop-closet",
    text: "Personal clothing inventory app with multi-user, multi-closet support. Browse items publicly; add, edit, and delete with authentication. Serverless backend via Netlify Functions with AWS S3 storage, Netlify Identity auth, and async background removal on item images.",
    langs: [{ Name: "TypeScript", URL: "https://www.typescriptlang.org/" }, { Name: "React", URL: "https://reactjs.org/" }, { Name: "AWS S3", URL: "https://aws.amazon.com/s3/" }, { Name: "Netlify", URL: "https://www.netlify.com/" }],
  },
  {
    img: LanImg,
    p_url: "https://rd.tooper.io/lan-mac-remote",
    git_url: "https://rd.tooper.io/lan-mac-remote",
    text: "Remote control for Mac over a local network. Supports triggering media key presses and OS events on a connected Mac running the server via HTTP over TCP/IP.",
    langs: [{ Name: "Go", URL: "https://go.dev/" }, { Name: "Next.js", URL: "https://nextjs.org/" }, { Name: "Electron", URL: "https://www.electronjs.org/" }],
  },
  {
    img: AutoTab,
    p_url: "https://rd.tooper.io/auto-tab-groups",
    git_url: "https://rd.tooper.io/tab-group-extension",
    text: "Updated Chrome Auto Tab Group Extension with enhanced features, increasing user count from ~100 to 1000+ while maintaining a 4.5-star rating. Improved styling, added multi-group support, zoom, ungrouping on no matching URL text, and an overall codebase clean-up.",
    langs: [{ Name: "JavaScript", URL: "https://www.javascript.com/" }, { Name: "HTML/CSS", URL: "https://www.w3.org/standards/webdesign/htmlcss" }],
  },
  {
    img: NfcImg,
    p_url: "https://rd.tooper.io/nfc",
    git_url: "https://rd.tooper.io/nfc",
    text: "Virtual letters in the form of a Near Field Communication (NFC) tag. Scanning these tags redirects the user to a new page through cookie manipulation. The combination of Contentful CMS and Next.js enables dynamic route / page updates.",
    langs: [{ Name: "Next.js", URL: "https://nextjs.org/" }, { Name: "Contentful", URL: "https://www.contentful.com/" }],
  },
  {
    img: UhpImg,
    p_url: "https://unitedhouseproductions.com/",
    git_url: "https://rd.tooper.io/united-house-productions",
    text: "Contract work — website for a house music events and artist management collective. Events and about content managed via Contentful CMS, with a booking inquiry form via EmailJS.",
    langs: [{ Name: "React", URL: "https://reactjs.org/" }, { Name: "Contentful", URL: "https://www.contentful.com/" }, { Name: "Netlify", URL: "https://www.netlify.com/" }],
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
            - more @{" "}
            <a
              className="in-link"
              href="https://rd.tooper.io/github"
              rel="noreferrer"
              target="_blank"
            >
              rd.tooper.io/github{" "}
            </a>
            -
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
