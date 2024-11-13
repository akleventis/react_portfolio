/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import { AutoTab, GitImg, UhpImg, NaotImg, NfcImg } from "../assets/index.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects.css";

const p_data = [
  {
    img: NaotImg,
    p_url: "https://mynaot.com",
    git_url: "https://github.com/akleventis/naot_tc",
    text: "Contract job for The National Association of Orthopaedic Technologists (NAOT). Utilized Next.js and MaterialUI to build out website with automated Netlify deployment. Integrated Stripe API for secure payments and implemented data fetching scripts for easy registration tracking. Currently maintaining and updating the website for optimal performance.",
    langs: [{ Name: "Next.js", URL: "https://nextjs.org/" }, { Name: "MaterialUI", URL: "https://mui.com/" }],
  },
  {
    img: UhpImg,
    p_url: "https://unitedhouseproductions.com",
    git_url: "https://github.com/akleventis/united_house_server",
    text: "Contract job for United House Productions LLC. Client written in React hosted through Amazon S3. Go RESTful API live backend server deployed through DigitalOcean. Stripe checkout integration for secure purchasing. PostgreSQL database for storing products, events, and dj information.",
    langs: [
      { Name: "Go", URL: "https://go.dev/" },
      { Name: "PostgreSQL", URL: "https://www.postgresql.org/" },
    ],
  },
  {
    img: NfcImg,
    p_url: "https://github.com/akleventis/nfc_v1",
    git_url: "https://github.com/akleventis/nfc_v1",
    text: "Virtual letters in the form of a Near Field Communtion (NFC) tag. Scanning these tags redirects the user to a new page through cookie manipulation. The combination of Contentful CMS and Next.js enables me to update the tag with new information without the need for hardcoding, thus creating new routes and pages with simplicity.",
    langs: [{ Name: "Next.js", URL: "https://nextjs.org/" }, { Name: "Sass", URL: "https://sass-lang.com/" }],
  },
  {
    img: AutoTab,
    p_url: "https://bit.ly/auto-tab-groups",
    git_url: "https://github.com/furofo/TabGroupExtension",
    text: "Updated Chrome Auto Tab Group Extension with enhanced features, increasing user count from ~100 to 900+ while maintaining a 4.5-star rating. Improved styling, added multi-group support, zoom, ungrouping on no matching URL text, and an overall codebase clean-up.",
    langs: [{ Name: "JavaScript", URL: "https://www.javascript.com/" }, { Name: "HTML/CSS", URL: "https://www.w3.org/standards/webdesign/htmlcss" }],
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
