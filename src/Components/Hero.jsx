import React from "react";
import curve from "../../public/curve.svg";
import fitness from "../../public/fitness.png";
import { useRefs } from "./RefContext";

const Hero = () => {
  const { homeRef } = useRefs();
  return (
    <>
      <div ref={homeRef} className="hero_container">
        <div className="hero_content_box">
        <div className="hero_right">
              <div className="circle">
                <img className="fitness_logo" src={fitness} alt="" />
              </div>
            </div>
          <div className="hero_left">
            Strengthen Your <span className="shadow_text">Mind and Body</span>{" "}
           
            <p>Personal training based in the Bangalore area.</p>
            <p>
              <span className="hlbl">In the studio, remote or at home</span>
            </p>
            <div className="btnbox">
              <button className="get_started"> Get Started</button>
              <div className="find_us">
                <h3>Find Us</h3>
              </div>
            </div>
          </div>
          {/* <div className="hero_right">
            <div className="circle">
              <img className="fitness_logo" src={fitness} alt="" />
            </div>
          </div> */}
        </div>
        <div className="btm_curve_div">
          <img className="btm-curve" src={curve} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
