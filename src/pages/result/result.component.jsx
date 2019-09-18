import React, { useState } from "react";

import ServiceItem from "../../components/service-item/service-item.component";
import NavButton from "../../components/nav-button/nav-button.component";

import "./result.styles.scss";

const ResultPage = ({ nextPath, serviceList, history }) => {
  let [isShowingAllServices, setIsShowingAllServices] = useState(false);

  const handleShowAllClicked = () => {
    setIsShowingAllServices(true);
  };

  return (
    <div className="page-root">
      <h2>Følgende tilbud kan passe for deg:</h2>
      <div className="service-list">
        {serviceList.length ? (
          isShowingAllServices ? (
            serviceList.map(service => {
              return <ServiceItem key={service.id} service={service} />;
            })
          ) : (
            serviceList.slice(0, 3).map(service => {
              return <ServiceItem key={service.id} service={service} />;
            })
          )
        ) : (
          <div>
            Vi fant dessverre ingen tilbud som passer dine ønsker og
            hindringer.
          </div>
        )}
      </div>
      {isShowingAllServices ? (
        ""
      ) : (
        <div className="button-row">
          <NavButton wide secondary onClick={handleShowAllClicked}>
            Vis alle tilbud
          </NavButton>
        </div>
      )}
      <div className="button-row">
        <NavButton wide onClick={() => history.push(nextPath)}>
          Velg nytt mål
        </NavButton>
      </div>
    </div>
  );
};

export default ResultPage;
