import ExpandIcon from "../images/icons/faq-expand-icon.svg";
import CollapseIcon from "../images/icons/faq-collapse-icon.svg";
import { useState } from "react";
const FAQSection = () => {
  const [activeAnswer, setActiveAnswer] = useState(null);
  const toggleAnswer = (answerId) => {
    setActiveAnswer(activeAnswer === answerId ? null : answerId);
  };
  return (
    <div className="faqSection">
      <div className="leftFaq">
        <p
          style={{
            color: "#175CD3",
            fontWeight: "600",
            fontSize: "16px",
            marginBottom: "0",
          }}
        >
          Support
        </p>
        <h1 style={{ color: "#1D2939", margin: "6px 0" }} className="faqHeader">
          FAQS
        </h1>
        <p
          style={{
            color: "#667085",
            fontWeight: "400",
            fontSize: "18px",
            marginTop: "0",
          }}
        >
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for?{" "}
          <a style={{ color: "#667085" }} href="#">
            Please chat to our friendly team.
          </a>
        </p>
      </div>
      <div className="rightFaq">
        <div
          //className="question-ans-div"
          className={` ${
            activeAnswer !== "answer1" ? "rm-bg-color" : "question-ans-div"
          }`}
          onClick={() => toggleAnswer("answer1")}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className={` ${
              activeAnswer !== "answer1" ? "rm-padding" : "question-icon-div"
            }`}
          >
            <h3
              style={{
                color: "#101828",
                fontWeight: "600",
                fontSize: "16px",
                margin: "0",
              }}
              className="question"
            >
              How many participants can join a ClearLink video conference?
            </h3>
            <img
              style={{ width: "17px", height: "17px" }}
              src={activeAnswer !== "answer1" ? ExpandIcon : CollapseIcon}
              alt="expand-icon"
              className="expand-icon"
            />
          </div>
          <p
            className={`answer ${activeAnswer === "answer1" ? "visible" : ""}`}
          >
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </p>
        </div>
        <div
          //className="question-ans-div"
          className={` ${
            activeAnswer !== "answer2" ? "rm-bg-color" : "question-ans-div"
          }`}
          onClick={() => toggleAnswer("answer2")}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className={` ${
              activeAnswer !== "answer2" ? "rm-padding" : "question-icon-div"
            }`}
          >
            <h3
              style={{
                color: "#101828",
                fontWeight: "600",
                fontSize: "16px",
                margin: "0",
              }}
              className="question"
            >
              Can I use ClearLink on multiple devices?
            </h3>
            <img
              style={{ width: "17px", height: "17px" }}
              src={activeAnswer !== "answer2" ? ExpandIcon : CollapseIcon}
              alt="expand-icon"
              className="expand-icon"
            />
          </div>
          <p
            className={`answer ${activeAnswer === "answer2" ? "visible" : ""}`}
          >
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </p>
        </div>
        <div
          //className="question-ans-div"
          className={` ${
            activeAnswer !== "answer3" ? "rm-bg-color" : "question-ans-div"
          }`}
          onClick={() => toggleAnswer("answer3")}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className={` ${
              activeAnswer !== "answer3" ? "rm-padding" : "question-icon-div"
            }`}
          >
            <h3
              style={{
                color: "#101828",
                fontWeight: "600",
                fontSize: "16px",
                margin: "0",
              }}
              className="question"
            >
              Is ClearLink compatible with other video conferencing platforms?
            </h3>
            <img
              style={{ width: "17px", height: "17px" }}
              src={activeAnswer !== "answer3" ? ExpandIcon : CollapseIcon}
              alt="expand-icon"
              className="expand-icon"
            />
          </div>
          <p
            className={`answer ${activeAnswer === "answer3" ? "visible" : ""}`}
          >
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </p>
        </div>
        <div
          //className="question-ans-div"
          className={` ${
            activeAnswer !== "answer4" ? "rm-bg-color" : "question-ans-div"
          }`}
          onClick={() => toggleAnswer("answer4")}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className={` ${
              activeAnswer !== "answer4" ? "rm-padding" : "question-icon-div"
            }`}
          >
            <h3
              style={{
                color: "#101828",
                fontWeight: "600",
                fontSize: "16px",
                margin: "0",
              }}
              className="question"
            >
              How does ClearLink ensure the security of my video conferences?
            </h3>
            <img
              style={{ width: "17px", height: "17px" }}
              src={activeAnswer !== "answer4" ? ExpandIcon : CollapseIcon}
              alt="expand-icon"
              className="expand-icon"
            />
          </div>
          <p
            className={`answer ${activeAnswer === "answer4" ? "visible" : ""}`}
          >
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </p>
        </div>
        <div
          //className="question-ans-div"
          className={` ${
            activeAnswer !== "answer5" ? "rm-bg-color" : "question-ans-div"
          }`}
          onClick={() => toggleAnswer("answer5")}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            //className="question-icon-div"
            className={` ${
              activeAnswer !== "answer5" ? "rm-padding" : "question-icon-div"
            }`}
          >
            <h3
              style={{
                color: "#101828",
                fontWeight: "600",
                fontSize: "16px",
                margin: "0",
              }}
              className="question"
            >
              Do I need to download any software to use ClearLink?
            </h3>
            <img
              style={{ width: "17px", height: "17px" }}
              src={activeAnswer !== "answer5" ? ExpandIcon : CollapseIcon}
              alt="expand-icon"
              className="expand-icon"
            />
          </div>
          <p
            className={`answer ${activeAnswer === "answer5" ? "visible" : ""}`}
          >
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </p>
        </div>
        <div
          //className="question-ans-div"
          className={` ${
            activeAnswer !== "answer6" ? "rm-bg-color" : "question-ans-div"
          }`}
          onClick={() => toggleAnswer("answer6")}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className={` ${
              activeAnswer !== "answer6" ? "rm-padding" : "question-icon-div"
            }`}
          >
            <h3
              style={{
                color: "#101828",
                fontWeight: "600",
                fontSize: "16px",
                margin: "0",
              }}
              className="question"
            >
              What kind of customer support does ClearLink provide?
            </h3>
            <img
              style={{ width: "17px", height: "17px" }}
              src={activeAnswer !== "answer6" ? ExpandIcon : CollapseIcon}
              alt="expand-icon"
              className="expand-icon"
            />
          </div>
          <p
            className={`answer ${activeAnswer === "answer6" ? "visible" : ""}`}
          >
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </p>
        </div>
      </div>
    </div>
  );
};
export default FAQSection;
