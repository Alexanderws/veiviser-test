import React from "react";

import "./nav-button.styles.scss";

import { ReactComponent as ArrowRight } from "../../assets/chevron-right.svg";

// Types: primary, secondary, start

const NavButton = ({ children, secondary, wide, ...otherProps }) => {
  return (
    <button
      className={`nav-button${secondary ? " secondary" : ""}${
        wide ? " wide" : ""
      }`}
      {...otherProps}
    >
      {arrow ? <ArrowRight className="arrow" /> : ""}
      {children}
    </button>
  );
};

export default NavButton;
