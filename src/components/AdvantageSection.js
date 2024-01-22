import VideoIcon from "../images/icons/advantage-video-icon.svg";
import NoiseIcon from "../images/icons/advantage-audio-icon.svg";
import CalendarIcon from "../images/icons/advantage-calendar-icon.svg";
import SecurityIcon from "../images/icons/advantage-security-icon.svg";
import AdvantageImage from "../images/advantage-right-img.svg";
import advantageArrow from "../images/icons/advantage-arrow.png";
const AdvantageSection = () => {
  return (
    <div className="advantageSection">
      <img
        className="advan-arrow"
        src={advantageArrow}
        alt="advan-arrow-icon"
      />
      <p
        style={{
          marginTop: "0",
          marginBottom: "0",
          color: "#175CD3",
          textAlign: "left",
          fontWeight: "600",
          fontSize: "18px",
        }}
      >
        The ClearLink Advantage
      </p>
      <h1 style={{ fontWeight: 600, marginTop: "8px" }}>
        Why choose ClearLink?
      </h1>
      <p
        style={{
          fontWeight: "400",
          fontSize: "24px",
          color: "#667085",
          width: "55%",
        }}
      >
        In a world where connection is everything, ClearLink takes the lead. Our
        cutting-edge video conferencing app offers:
      </p>
      <div className="bottom-advantage">
        <div className="bottom-left-advantage">
          <div className="video-div">
            <img src={VideoIcon} alt="video-icon" className="advan-icon" />
            <h2 style={{ marginBottom: "0px" }}>Crystal-clear HD video</h2>
            <p
              style={{
                marginTop: "8px",
                color: "#475467",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              No more pixelation or blurriness – just stunning, lifelike clarity
              that brings your team closer in meetings.
            </p>
          </div>
          <div className="video-div">
            <img className="advan-icon" src={NoiseIcon} alt="video-icon" />
            <h2 style={{ marginBottom: "0px" }}>Noise-canceling audio</h2>
            <p
              style={{
                marginTop: "8px",
                color: "#475467",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Say goodbye to distractions with our advanced audio tech for
              crisp, interruption-free conversations.
            </p>
          </div>
          <div className="video-div">
            <img className="advan-icon" src={CalendarIcon} alt="video-icon" />
            <h2 style={{ marginBottom: "0px" }}>Scheduling made easy</h2>
            <p
              style={{
                marginTop: "8px",
                color: "#475467",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Streamline your agenda with ClearLink's intuitive scheduling. Set
              up meetings, send invitations, and receive reminders in one place.
            </p>
          </div>
          <div className="video-div">
            <img className="advan-icon" src={SecurityIcon} alt="video-icon" />
            <h2 style={{ marginBottom: "0px" }}>Bank-grade security</h2>
            <p
              style={{
                marginTop: "8px",
                color: "#475467",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Your privacy is our priority with bank-grade security protocols
              safeguarding your meetings and data from unwanted intruders.
            </p>
          </div>
        </div>
        <div className="bottom-right-advantage">
          <img src={AdvantageImage} alt="advantage-img" />
        </div>
      </div>
    </div>
  );
};
export default AdvantageSection;
