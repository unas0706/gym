import React from "react";

const ServiceIcon = ({ src, text }) => {
  return (
    <div className="service-icon">
      <div className="service-icon-img">
        <img src={src} className="service-icon-img-tag" alt="" />
      </div>
      <p className="service-icon-text">{text}</p>
    </div>
  );
};

export default ServiceIcon;
