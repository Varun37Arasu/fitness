import React from "react";
import curve from "../../public/curve.svg";
import card from "../../public/card.jpeg";
import ModalCard from "./ModalCard";
import { useRefs } from "./RefContext";

const WhatWeDo = () => {
  const { wedoRef } = useRefs();

  return (
    <>
      <div ref={wedoRef} className="whatWeDo">
        <div className="top_curve_div">
          <img className="top-curve" src={curve} alt="" />
        </div>
        <div className="modal">
          <div className="modalHeading">
            <h1>What We Do</h1>
            <hr />
          </div>
          <p>
            You’ve probably already tried dozens of strategies to lose weight
            and get fit; diet pills, gym memberships and taking supplements have
            left you disappointed. Your Personal Trainer understands this and
            provide you with both the physical resources and mental tools to
            push your boundaries, escape your inertia, and get the body you
            deserve. If you’re at your wit’s end, then you’ve come to the right
            place: get the help you need right now to overcome illness and
            rediscover your youth.​
          </p>
          <div className="modalCards">
            <ModalCard />
            <ModalCard />
            <ModalCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
