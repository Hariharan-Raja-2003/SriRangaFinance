import { Link } from "react-scroll";
import MyVideo from "../video.mp4";

function Home() {
  return (
    <header id="headerbg">
      <video src={MyVideo} loop autoPlay muted></video>
      <div className="header-content">
        <h1>Your Trusted Financial Partner</h1>
        <p className="header-subtitle">
          Empowering your financial future with expert guidance and innovative solutions
        </p>
        <div className="row header-buttons">
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={1000}
            className="btn btn-primary"
          >
            Our Services
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
            className="btn btn-secondary"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="headerbg"></div>
    </header>
  );
}

export default Home;

