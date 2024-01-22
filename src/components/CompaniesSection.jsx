import CompaniesLogo from "../images/companies-img.svg";

const CompaniesSection = () => {
  return (
    <div className="companies">
      <p className="company-header">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div
        className="logo-div"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={CompaniesLogo}
          alt="companies-logo"
          style={{ width: "96%", display: "flex", justifyContent: "center" }}
        />
      </div>
    </div>
  );
};
export default CompaniesSection;
