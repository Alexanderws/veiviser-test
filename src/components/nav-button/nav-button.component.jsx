import React from "react";

import "./nav-button.styles.scss";

// Types: primary, secondary, start

const NavButton = ({ children, secondary, wide, ...otherProps }) => {
  return (
    <button
      className={`nav-button${secondary ? " secondary" : ""}${
        wide ? " wide" : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default NavButton;
