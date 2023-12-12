import React from "react";

const NavItems = (props) => {
  return (
    <>
      <div
        className="nav_items_item"
        onClick={() => {
          props.scrollHandler(props.targetRef);
        }}
      >
        {props.item}
      </div>
    </>
  );
};

export default NavItems;
