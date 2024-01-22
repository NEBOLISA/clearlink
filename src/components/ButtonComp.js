import React from "react";
const ButtonComp = ({ text, isNoColorBtn }) => {
  return (
    <>
      {isNoColorBtn ? (
        <button className="no-bg-color-btn">{text}</button>
      ) : (
        <button className="blue-bg-btn">{text}</button>
      )}
    </>
  );
};
export default ButtonComp;
