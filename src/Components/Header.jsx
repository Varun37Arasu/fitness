import React from "react";
import NavItems from "./NavItems";
import { useRefs } from "./RefContext";

const Header = () => {
  const { homeRef, aboutRef, wedoRef, ssRef } = useRefs();
  console.log("Header : " + aboutRef.current);

  const scrollHandler = (eleRef) => {
    const loc =  eleRef.current.offsetTop ;
    window.scrollTo({ top: loc, behavior: "smooth" });
  };
  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="logo">Urs</div>
          <div className="nav_items">
            <NavItems
              scrollHandler={scrollHandler}
              targetRef={homeRef}
              item="Home"
            />
            <NavItems
              scrollHandler={scrollHandler}
              targetRef={aboutRef}
              item="About"
            />
            <NavItems
              scrollHandler={scrollHandler}
              targetRef={wedoRef}
              item="What We Do"
            />
            {/* <NavItems
              scrollHandler={scrollHandler}
              targetRef={aboutRef}
              item="Diet Plan"
            /> */}
            <NavItems
              scrollHandler={scrollHandler}
              targetRef={ssRef}
              item="Success Stories"
            />
            <NavItems
              scrollHandler={scrollHandler}
              targetRef={aboutRef}
              item="Contact"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
