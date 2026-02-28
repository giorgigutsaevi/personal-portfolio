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
              to="/files/Giorgi-Gutsaev-CV.pdf"
              target="_blank"
              download
            >
              Resumé <CloudDownloadIcon />
            </Link>
          </button>
        </div>
      </div>
      <div className="about__brief">
        <p>
          At this point in time, I'd like to think that I'm a fully-fledged full stack developer. I love building apps, sandwiches
          and debugging software. I also love learning new technologies, especially in the age of AI. I'm originally from a tiny country of Georgia, but I've lived in the UK for 8 years now.
        </p>
        <p>
          I love cheese, and cane name at least 1 cheese from the main cheese producing nations, and play video games.
        </p>
        <p>
          Always excited for innovation and happy to learn new things. You can rely on me to stay calm and effective under pressure :)
        </p>
      </div>
    </div>
  );
};

export default AboutIntroduction;
