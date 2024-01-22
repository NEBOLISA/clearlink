import logo from "../images/icons/banner-logo.svg";
import GoogleIcon from "../images/icons/footer-google-icon.svg";
import AppleIcon from "../images/icons/footer-apple-icon.svg";
import LinkedinIcon from "../images/icons/footer-linkedin-icon.svg";
import TwitterIcon from "../images/icons/footer-twitter-icon.svg";
import FbIcon from "../images/icons/footer-fb-icon.svg";
import InstaIcon from "../images/icons/footer-insta-icon.svg";
import GithubIcon from "../images/icons/footer-github-icon.svg";
import YoutubeIcon from "../images/icons/footer-youtube-icon.svg";
const FooterSection = () => {
  return (
    <div className="footerSection">
      <div className="top-footer">
        <div className="left-footer">
          <div className="logo-section">
            <img src={logo} alt="banner-logo" className="logo" />
            <p className="logo-text">
              ClearLink<span style={{ color: "#175CD3" }}>.</span>
            </p>
          </div>
          <p style={{ color: "#475467", fontWeight: "400", fontSize: "16px" }}>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div className="middle-footer">
          <div className="first-middle-footer">
            <p
              style={{ color: "#667085", fontSize: "16px", fontWeight: "600" }}
            >
              Product
            </p>
            <ul>
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="second-middle-footer">
            <p
              style={{ color: "#667085", fontSize: "16px", fontWeight: "600" }}
            >
              Company
            </p>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="third-middle-footer">
            <p
              style={{ color: "#667085", fontSize: "16px", fontWeight: "600" }}
            >
              Resources
            </p>
            <ul>
              <li>Blogs</li>
              <li>Events</li>
              <li>Help center</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="fourth-middle-footer">
            <p
              style={{ color: "#667085", fontSize: "16px", fontWeight: "600" }}
            >
              Legal
            </p>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Licenses</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="right-footer">
          <p style={{ color: "#004EEB", fontSize: "16px" }}>Get the app</p>

          <div>
            <img
              src={AppleIcon}
              alt="apple-icon"
              style={{ marginBottom: "1rem", cursor: "pointer" }}
              className="store-icon"
            />
          </div>
          <img
            style={{ cursor: "pointer" }}
            src={GoogleIcon}
            alt="google-icon"
            className="store-icon"
          />
        </div>
      </div>
      <div className="bottom-footer">
        <div className="footer-wrapper">
          <p>© 2023 ClearLink. All rights reserved.</p>
          <div className="social-icons">
            <img
              src={LinkedinIcon}
              alt="social-icons"
              className="social-icon"
            />
            <img src={TwitterIcon} alt="social-icons" className="social-icon" />
            <img src={FbIcon} alt="social-icons" className="social-icon" />
            <img src={InstaIcon} alt="social-icons" className="social-icon" />
            <img src={GithubIcon} alt="social-icons" className="social-icon" />
            <img src={YoutubeIcon} alt="social-icons" className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
