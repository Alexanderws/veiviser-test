import React from "react";
import {
  FormControl,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

import NavButton from "../../components/nav-button/nav-button.component";

import "./hindrance.styles.scss";

const HindrancePage = ({
  hindrances,
  onHindranceChange,
  nextPath = "",
  userDesire,
  history
}) => {
  return (
    <div className="page-root">
      <h2>
        Er det noe som gjør det vanskelig å{" "}
        <span className="t-italic">{userDesire.textDefinite}?</span>
      </h2>

      <div className="form-column">
        <FormControl>
          {hindrances
            .filter(hindrance => !hindrance.disabled)
            .map(hindrance => {
              return (
                <FormControlLabel
                  key={hindrance.id}
                  label={hindrance.text}
                  control={
                    <Checkbox
                      checked={hindrance.selected}
                      onChange={() => onHindranceChange(hindrance.id)}
                      value={hindrance.id}
                    />
                  }
                />
              );
            })}
        </FormControl>
      </div>
      <div className="button-row">
        <NavButton secondary onClick={() => history.goBack()}>
          Forrige
        </NavButton>
        <NavButton onClick={() => history.push(nextPath)}>
          Gå til neste steg
        </NavButton>
      </div>
    </div>
  );
};

export default HindrancePage;
