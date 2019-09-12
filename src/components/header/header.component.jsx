import React from "react";

import "./header.styles.scss";

const Header = ({ isHindranceFirst }) => {
  return (
    <div className="header">
      <div className="test-mode">
        {`${
          isHindranceFirst ? "Hindring -> Ønske" : "Ønske -> Hindring"
        }`}
      </div>
    </div>
  );
};

export default Header;
