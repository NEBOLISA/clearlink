import ButtonComp from "./ButtonComp";
import AiLogo from "../images/icons/hero-ai-icon.png";
import HeroImage from "../images/hero-right-img.svg";
import ReviewImg from "../images/hero-reviews.svg";
import RatingStarImg from "../images/icons/hero-stars.svg";
import GridPhotos from "../images/grid-photos.svg";
import GridIcons from "../images/icons/grid-icons.svg";
const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="left-hero">
        <h1 className="hero-header">
          Uniting the world, one video call at a time
        </h1>
        <p className="hero-subheader">
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>
        <div className="btns-div">
          <ButtonComp text="Start your free trial" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <img src={AiLogo} alt="ai-logo" />
            <p
              style={{ color: "#175CD3", fontWeight: "600", fontSize: "16px" }}
            >
              Discover AI assistant
            </p>
          </div>
        </div>
        <div className="review-div">
          <img src={ReviewImg} alt="review-img" className="review-img" />
          <div className="rating-div">
            <div className="rating-top">
              <img src={RatingStarImg} alt="stars-img" />
              <span>5.0</span>
            </div>
            <p className="rating-text">from 3,000+ reviews</p>
          </div>
        </div>
      </div>
      <div className="right-hero">
        <div
          className="grid-div"
          style={{
            backgroundColor: "#EFF8FF",
            borderRadius: "16px",
            padding: "32px",
            border: "1px solid #B2DDFF",
            boxShadow: " 0 5px 23px -12px #101828",
          }}
        >
          <img src={GridPhotos} alt="grid-pics" className="grid-photos" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1.6rem",
            }}
            className="grid-icons-wrapper"
          >
            <img src={GridIcons} alt="grid-icons" className="grid-icons" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
