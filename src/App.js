import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import StartPage from "./pages/start/start.component";
import GoalPage from "./pages/goal/goal.component";
import HindrancePage from "./pages/hindrance/hindrance.component";
import ResultPage from "./pages/result/result.component";

import { goals } from "./store/goal.data";
import { getElligibleServices } from "./utils/service-recommendation";
import { hindranceList } from "./store/hindrance.data";
import "./App.css";

const DESIRE_INTITIAL_STATE = goals.kleMeg;
const HINDRANCES_INITAL_STATE = hindranceList.map(hindrance => {
  return {
    id: hindrance.id,
    text: hindrance.text,
    selected: false,
    disabled: false
  };
});

const App = withRouter(({ location }) => {
  const [userDesire, setDesire] = useState(DESIRE_INTITIAL_STATE);
  const [userHindrances, setHindrances] = useState(
    HINDRANCES_INITAL_STATE
  );

  useEffect(() => {
    console.log("useEffect", userDesire);
    updateHindrances();
  }, [userDesire]);

  const resetState = () => {
    setDesire(DESIRE_INTITIAL_STATE);
    setHindrances(HINDRANCES_INITAL_STATE);
  };

  const handleDesireChange = id => {
    setDesire(goals[id]);
    console.log("handleDesireChange", userDesire);
  };

  const updateHindrances = () => {
    console.log("updateHindrances");
    setHindrances(prevState => {
      return prevState.map(hindrance => {
        const relatedHindrances = userDesire.hindrances;
        console.log("userDesire", userDesire.id);

        if (relatedHindrances.includes(hindrance.id)) {
          return { ...hindrance, disabled: false };
        } else {
          return { ...hindrance, disabled: true };
        }
      });
    });
  };

  const handleHindranceChange = newHindrance => {
    setHindrances(prevState => {
      return prevState.map(hindrance => {
        if (hindrance.id === newHindrance) {
          return { ...hindrance, selected: !hindrance.selected };
        } else {
          return hindrance;
        }
      });
    });
  };

  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <StartPage nextPath={"goal"} {...props} />}
        />
        <Route
          exact
          path="/goal"
          render={props => (
            <GoalPage
              nextPath={"hindrance"}
              activeDesire={userDesire}
              onDesireChange={handleDesireChange}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/hindrance"
          render={props => (
            <HindrancePage
              userDesire={userDesire}
              nextPath={"result"}
              hindrances={userHindrances}
              onHindranceChange={handleHindranceChange}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/result"
          render={props => (
            <ResultPage
              userDesire={userDesire}
              nextPath={"goal"}
              serviceList={getElligibleServices(
                userDesire.id,
                userHindrances
              )}
              {...props}
            />
          )}
        />
      </Switch>
    </React.Fragment>
  );
});

export default App;
