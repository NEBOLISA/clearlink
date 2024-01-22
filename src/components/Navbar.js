import React from "react";
import logo from "../images/icons/banner-logo.svg";
import dropdown from "../images/icons/navbar-dropdown-icon.png";
import ButtonComp from "./ButtonComp";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <div className="logo-section">
          <img src={logo} alt="banner-logo" className="logo" />
          <p className="logo-text">
            ClearLink<span style={{ color: "#175CD3" }}>.</span>
          </p>
        </div>
        <div className="middle-section">
          <ul>
            <li>
              <p>Products</p>
              <img src={dropdown} alt="dropdown-icon" />
            </li>
            <li>
              <p>Solutions</p>
              <img src={dropdown} alt="dropdown-icon" />
            </li>
            <li>
              <p>Resources</p>
              <img src={dropdown} alt="dropdown-icon" />
            </li>
            <li>
              <p>Pricing</p>
            </li>
          </ul>
        </div>
        <div className="right-section">
          <ButtonComp isNoColorBtn text="Talk to sales" />
          <ButtonComp text="Sign up for free" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
