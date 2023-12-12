import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footerMain">
        <hr className="footer_hr1" />
        <div className="footer">
          <div className="flogo">
            <div className="logo"></div>
          </div>
          <div className="footer_section_container">
            <div className="footerSection">
              <span className="fsec_heading"> Fitness</span>
              <ul>
                <li>Stay Motivated</li>
                <li>Getting Fit</li>
                <li>What to Eat </li>
                <li>Mindset </li>
              </ul>
            </div>
            <div className="footerSection">
              <span className="fsec_heading"> Navigate</span>
              <ul>
                <li>My Story</li>
                <li>Success Stories</li>
                <li>Plans </li>
                <li>Contact </li>
              </ul>
            </div>
            <div className="footerSection">
              <span className="fsec_heading"> Instagram</span>
              <ul>
                <li>Account 1</li>
                <li>Account 2</li>
              </ul>
            </div>
            <div className="footerSection">
              <span className="fsec_heading"> Social</span>
              <ul>
                <li>Instagram</li>
                <li>Meta</li>
                <li>Twitter </li>
                <li>LinkedIn </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyrightBox">
          <footer className="footerCp">
            <p>
              {new Date().getFullYear()} &copy;{" "}
              <span className="footerCopyright">All rights reserved</span>{" "}
            </p>
            <p className="madewithlove">
              Made with <span className="heart">&#9825;</span> by{" "}
              <span className="arasu">ಅರಸು</span>
            </p>
            <p>
              <span className="link">Get in Touch</span>
            </p>
          </footer>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Footer;
