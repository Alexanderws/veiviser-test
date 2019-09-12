import React from "react";
import { Link } from "react-router-dom";

import "./footer.styles.scss";

const Footer = ({ onTestModeChange }) => {
  return (
    <div className="footer">
      <Link className="button" to="/" onClick={onTestModeChange}>
        BYTT TEST
      </Link>
    </div>
  );
};

export default Footer;
