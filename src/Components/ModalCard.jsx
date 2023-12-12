import React from "react";
import card from "../../public/card.jpeg";

const ModalCard = () => {
  return (
    <>
      <div className="modalCard">
        <img className="cardImg" src={card} alt="" />
        <div className="cardName">More Energy</div>
        <div className="cardContent">
          <p>
            The purpose of personal training is to feel more energetic. Exercise
            stimulates your body, forcing it to adapt and make changes, helping
            you not only look fitter on the outside but have more energy
            naturally on the inside.
          </p>
          {/* <button className="readMore">More</button> */}
        </div>
      </div>
    </>
  );
};

export default ModalCard;
