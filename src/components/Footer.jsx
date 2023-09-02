import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <div className="devloper">devloper :</div>{" "}
        <div className="dev_name">anish</div>
      </div>
      <div className="footer_right">
        <div className="follow">follow me on</div>

        <div className="icons">
          <a href="https://www.instagram.com/mr___jerry___47/" rel="noopener">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/anishsharma47" rel="noopener">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
