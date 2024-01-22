import ShopifyLogo from "../images/icons/testimonial-shopify-logo.svg";
import TestimonialStar from "../images/icons/hero-stars.svg";
import LeftArrow from "../images/icons/testimonial-left-arrow.svg";
import RightArrow from "../images/icons/testimonial-right-arrow.svg";
import Sarah from "../images/testimonial-sarah.svg";
import RightImage from "../images/testimonial-right-img.svg";
const TestimonialSection = () => {
  return (
    <div className="testimonialSection">
      <div className="testimonial-wrapper">
        <img
          style={{ marginBottom: "2rem" }}
          src={ShopifyLogo}
          alt="shopify-icon"
        />
        <div className="star-wrapper" style={{ marginBottom: "2rem" }}>
          <img src={TestimonialStar} alt="star-icon" />
        </div>
        <div className="testimonial-bottom">
          <div className="testimonial-bottom-left">
            <h3 style={{ fontWeight: 500, fontSize: "44px", marginTop: "0" }}>
              ClearLink has upgraded our remote meetings. High-quality video,
              screen sharing, andtop-notch security make it essential for our
              team.
            </h3>
            <div className="bottom-left-down-div">
              <div className="left-down-div">
                <img src={Sarah} alt="sarah-pic" />
                <div className="details">
                  <h3 style={{ marginBottom: "0", fontSize: "17px" }}>
                    Sarah Thompson
                  </h3>
                  <p
                    style={{
                      marginTop: "4px",
                      color: "#475467",
                      fontSize: "14",
                    }}
                  >
                    Project Manager, Shopify
                  </p>
                </div>
              </div>
              <div className="right-down-div">
                <img
                  style={{ cursor: "pointer" }}
                  src={LeftArrow}
                  alt="left-arrow-icon"
                  className="left-arrow"
                />
                <img
                  style={{ cursor: "pointer" }}
                  src={RightArrow}
                  alt="right-arrow-icon"
                  className="right-arrow"
                />
              </div>
            </div>
          </div>
          <div className="testimonial-bottom-right">
            <img src={RightImage} alt="right-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialSection;
