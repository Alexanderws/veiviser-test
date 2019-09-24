import React from "react";

import NavButton from "../../components/nav-button/nav-button.component";
import { goals } from "../../store/goal.data";
import "./goal.styles.scss";

const GoalPage = ({
  onDesireChange,
  onDesireLeave,
  nextPath = "",
  history
}) => {
  return (
    <div className="page-root">
      <h2>Hva ønsker du å oppnå?</h2>
      <div className="form-column">
        {Object.keys(goals).map(key => {
          return (
            <NavButton
              wide
              option
              key={goals[key].id}
              value={goals[key].id}
              onClick={() => {
                onDesireLeave();
                onDesireChange(goals[key].id);
                history.push(nextPath);
              }}
            >
              {goals[key].text}
            </NavButton>
          );
        })}
      </div>
      <div className="button-row">
        <NavButton secondary onClick={() => history.goBack()}>
          Forrige
        </NavButton>
      </div>
    </div>
  );
};

export default GoalPage;
