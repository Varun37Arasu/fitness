import React, { useRef } from "react";
// import body from "../../public/bodybuilder.jpg"
import body from "../../public/bb2.png";
import { useRefs } from "./RefContext";

const About = () => {
  const { aboutRef } = useRefs();
  console.log("About 1 : " + aboutRef.current);

  return (
    <>
      <div ref={aboutRef} className="about">
        {console.log("About 2 : " + aboutRef.current)}
        <div className="about_left">
          <img className="trainer" src={body} alt="Trainer image" />
        </div>
        <div className="about_right">
          <h2>Hi! I'm</h2>
          <h1>Rithesh Urs B R</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur numquam ducimus dolorum dolore qui, minima sapiente
            nihil aliquid facilis, ullam molestiae iste? Harum voluptas optio
            consequuntur nisi dolorem, earum ea officia impedit hic assumenda
            numquam saepe placeat? Quasi culpa sequi cum itaque unde,
            praesentium tempore dolores fugit cupiditate? Et excepturi atque
            odit sit qui earum ad quidem accusamus temporibus, optio beatae
            labore enim! Quibusdam, ex! Cupiditate, ab. Sapiente aliquam illo
            facere. Eveniet voluptatem incidunt, aut iure tenetur nemo, eos quod
            accusantium sint, beatae autem ducimus. Exercitationem, mollitia,
            vitae sit necessitatibus repudiandae ipsam provident dolore quis
            neque, aliquam amet aliquid quia!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
