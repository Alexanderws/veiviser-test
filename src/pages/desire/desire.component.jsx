import React from "react";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel
} from "@material-ui/core";

import NavButton from "../../components/nav-button/nav-button.component";
import { desires } from "../../store/desire.data";
import "./desire.styles.scss";

const DesirePage = ({
  activeDesire,
  onDesireChange,
  onDesireLeave,
  nextPath = "",
  history
}) => {
  return (
    <div className="page-root">
      <h2>Hva er viktig for deg å oppnå i hverdagen?</h2>
      <div className="form-column">
        <FormControl>
          <RadioGroup
            aria-label="Ønske"
            name="ønske"
            value={activeDesire}
            onChange={onDesireChange}
          >
            {Object.keys(desires).map(key => {
              return (
                <FormControlLabel
                  key={desires[key].id}
                  value={desires[key].id}
                  control={<Radio />}
                  label={desires[key].text}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>
      <div className="button-row">
        <NavButton secondary onClick={() => history.goBack()}>
          Forrige
        </NavButton>
        <NavButton
          onClick={() => {
            onDesireLeave();
            history.push(nextPath);
          }}
        >
          Gå til neste steg
        </NavButton>
      </div>
    </div>
  );
};

export default DesirePage;
