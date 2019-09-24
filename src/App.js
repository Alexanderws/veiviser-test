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
  const [isHindranceFirst, setHindranceFirst] = useState(false);
  const [userDesire, setDesire] = useState(DESIRE_INTITIAL_STATE);
  const [userHindrances, setHindrances] = useState(
    HINDRANCES_INITAL_STATE
  );

  useEffect(() => {
    window.scrollTo(0, 40);
  }, [location.pathname]);

  const resetState = () => {
    setDesire(DESIRE_INTITIAL_STATE);
    setHindrances(HINDRANCES_INITAL_STATE);
  };

  const handleDesireChange = id => {
    setDesire(goals[id]);
  };

  const handleDesireLeave = () => {
    console.log("handleDesireLeave");
    updateHindrances();
  };

  const updateHindrances = () => {
    console.log("updateHindrances");
    if (!isHindranceFirst) {
      setHindrances(prevState => {
        return prevState.map(hindrance => {
          const relatedHindrances = userDesire.hindrances;

          if (relatedHindrances.includes(hindrance.id)) {
            return { ...hindrance, disabled: false };
          } else {
            return { ...hindrance, disabled: true };
          }
        });
      });
    }
  };

  const handleHindranceChange = newHindrance => {
    console.log("handleHindranceChange");
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

  const handleTestModeChange = () => {
    setHindranceFirst(prevState => !prevState);
    resetState();
  };

  const getNextPath = fromLocation => {
    switch (fromLocation) {
      case "start":
        return isHindranceFirst ? "/hindrance" : "/goal";
      case "goal":
        return isHindranceFirst ? "/result" : "/hindrance";
      case "hindrance":
        return isHindranceFirst ? "/goal" : "/result";
      case "result":
        return isHindranceFirst ? "/hindrance" : "/goal";
      default:
        return "/";
    }
  };

  return (
    <React.Fragment>
      <Header isHindranceFirst={isHindranceFirst} />
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <StartPage nextPath={getNextPath("start")} {...props} />
          )}
        />
        <Route
          exact
          path="/goal"
          render={props => (
            <GoalPage
              nextPath={getNextPath("goal")}
              activeDesire={userDesire}
              onDesireLeave={handleDesireLeave}
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
              nextPath={getNextPath("hindrance")}
              isHindranceFirst={isHindranceFirst}
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
              nextPath={getNextPath("result")}
              serviceList={getElligibleServices(
                userDesire.id,
                userHindrances
              )}
              {...props}
            />
          )}
        />
      </Switch>
      <Footer onTestModeChange={handleTestModeChange} />
    </React.Fragment>
  );
});

export default App;
