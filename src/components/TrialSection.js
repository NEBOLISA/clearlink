import ButtonComp from "./ButtonComp";
import CheckIcon from "../images/icons/trial-check-icon.svg";
import RightImg from "../images/trial-right-img.svg";
const TrialSection = () => {
  return (
    <div className="trialSection">
      <div className="left-trial">
        <h1 style={{ fontWeight: "600", fontSize: "48px" }}>
          Ready to clear the path to perfect communication?
        </h1>

        <div className="benefit-wrapper">
          <div className="check-benefit">
            <img src={CheckIcon} alt="check-icon" className="check-icon" />
            <p
              style={{
                color: "#475467",
                fontWeight: "400",
                fontSize: "20px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              30 days free trial
            </p>
          </div>
          <div className="check-benefit">
            <img src={CheckIcon} alt="check-icon" className="check-icon" />
            <p
              style={{
                color: "#475467",
                fontWeight: "400",
                fontSize: "20px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Cancel at any time
            </p>
          </div>
          <div className="check-benefit">
            <img src={CheckIcon} alt="check-icon" className="check-icon" />
            <p
              style={{
                color: "#475467",
                fontWeight: "400",
                fontSize: "20px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Access to all features
            </p>
          </div>
          <div className="check-benefit">
            <img src={CheckIcon} alt="check-icon" className="check-icon" />
            <p
              style={{
                color: "#475467",
                fontWeight: "400",
                fontSize: "20px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Peronalized onboarding
            </p>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          className="trial-btns-div"
        >
          <ButtonComp isNoColorBtn text="Talk to sales" background="white" />
          <ButtonComp text="Start your free trial" />
        </div>
      </div>

      <div className="right-trial">
        <img src={RightImg} alt="right-icon" />
      </div>
    </div>
  );
};
export default TrialSection;
