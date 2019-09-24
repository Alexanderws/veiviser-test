import React from "react";

import "./nav-button.styles.scss";

import { ReactComponent as ArrowRight } from "../../assets/chevron-right.svg";

const NavButton = ({
  children,
  secondary,
  wide,
  option,
  ...otherProps
}) => {
  return (
    <button
      className={`nav-button${secondary ? " secondary" : ""}${
        wide ? " wide" : ""
      }${option ? " option" : ""}`}
      {...otherProps}
    >
      {option ? (
        <div className="arrow">
          <ArrowRight />
        </div>
      ) : (
        ""
      )}
      {children}
    </button>
  );
};

export default NavButton;
