import React from "react";

import "./service-item.styles.scss";

const ServiceItem = ({ service }) => {
  return (
    <div className="service-item">
      <h4>{service.name}</h4>
      <span>{service.description}</span>
      {/*<span>Rating: {service.score}</span>*/}
    </div>
  );
};

export default ServiceItem;
