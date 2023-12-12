import React from "react";
import curve from "../../public/curve.svg";
import card from "../../public/card.jpeg";
import ModalCard from "./ModalCard";
import { useRefs } from "./RefContext";
import Slides from "./Slides";

const SuccessStories = () => {
  const { ssRef } = useRefs();
  return (
    <>
      <div ref={ssRef} className="successStories">
        <div className="modal ssModal">
          <div className="modalHeading">
            <h1>Success Stories</h1>
            <hr />
          </div>
          <div className="modalCards slidesCardContainer">
            <Slides />
          </div>
        </div>
        <div className="btm_curve_div1">
          <img className="btm-curve" src={curve} alt="" />
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
