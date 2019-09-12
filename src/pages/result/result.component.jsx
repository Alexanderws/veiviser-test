import React from "react";

import ServiceItem from "../../components/service-item/service-item.component";
import NavButton from "../../components/nav-button/nav-button.component";

import "./result.styles.scss";

const ResultPage = ({ serviceList, history }) => {
  return (
    <div className="page-root">
      <h2>Følgende tilbud kan passe for deg:</h2>
      <div className="service-list">
        {serviceList.length > 0 ? (
          serviceList.slice(0, 3).map(service => {
            return <ServiceItem key={service.id} service={service} />;
          })
        ) : (
          <div>
            Vi fant dessverre ingen tilbud som passer dine ønsker og
            hindringer.
          </div>
        )}
      </div>
      <div className="button-row">
        <NavButton wide onClick={() => history.push("/")}>
          Start på nytt
        </NavButton>
      </div>
    </div>
  );
};

export default ResultPage;
