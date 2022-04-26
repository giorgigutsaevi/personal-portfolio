import "./AboutIntroduction.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import TwitterIcon from "@mui/icons-material/Twitter";

const AboutIntroduction = () => {
  return (
    
    <div className="about-introduction">
      <div>
      </div>
      <h1 className="about-introduction__heading">
        <span className="about-introduction__title">
          <div className="aboutDot"></div>about
        </span>
        <span className="about-introduction__selected">('selected')</span>
        <br />
      </h1>
      <div className="about__icons__wrapper">
        <div className="icon-container">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/giorgigutsaevi"
            className="about__icons"
          >
            <GitHubIcon style={{ fontSize: 33 }} />
          </a>

          <a
            className="about__icons"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/giorgigutsaev/"
          >
            <LinkedInIcon style={{ fontSize: 34 }} />
          </a>
          <a
            className="about__icons"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/mapleagedcheese"
          >
            <TwitterIcon style={{ fontSize: 34 }} />
          </a>
        </div>
        <div className="about__download">
          Download my{" "}
          <button className="about__resume--button">
            <Link
              className="about__resume--link"
              to="/files/Giorgi_Gutsaev_CV.pdf"
              target="_blank"
              download
            >
              resume <CloudDownloadIcon />
            </Link>
          </button>
        </div>
      </div>
      <div className="about__brief">
        <p>
          I am a junior full stack developer. I love building apps, sandwiches
          and debugging software. I am from Georgia, based in London.
        </p>
        <p>
          I enjoy watching the Office (US), learning all there is about cheeses
          of the world and video games.
        </p>
        <p>
          I am currently learning Python and Next.JS for that sweet Server Side
          Rendering magic.
        </p>
      </div>
    </div>
  );
};

export default AboutIntroduction;
