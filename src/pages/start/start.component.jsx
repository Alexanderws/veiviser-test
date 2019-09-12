import React from "react";

import NavButton from "./../../components/nav-button/nav-button.component";

import "./start.styles.scss";

const StartPage = ({ nextPath = "", history }) => {
  return (
    <div className="page-root">
      <div className="page-info">
        <h1>Få hjelp til å velge riktig tilbud</h1>
        <span className="page-description">
          Se hvilke tilbud kommunen har til de som er 60 år eller eldre.
          Ved å svare på noen enkle spørsmål om deg selv vil du få forslag
          om tilbud vi tror passer best for deg.
        </span>
      </div>
      <div className="button-row">
        <NavButton wide onClick={() => history.push(nextPath)}>
          Start veiviseren
        </NavButton>
      </div>
    </div>
  );
};

export default StartPage;
