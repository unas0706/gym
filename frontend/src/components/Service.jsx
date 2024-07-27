import React from "react";
import ServiceIcon from "./ServiceIcon";

const Service = () => {
  return (
    <div className="service" id="Services">
      <header className="header">Services</header>
      <div className="con">
        <section className="service-quote">
          <h2 className="service-main-quote">
            We provide service that fits the best for you
          </h2>
          <p className="service-sub-quote">
            Strive for greatness with the best around the best , aroundthe best
            and in the best fitness environment available in the city
          </p>
        </section>

        <section className="service-icons">
          <ServiceIcon src="./icons/exercise.png" text="Exercise" />
          <ServiceIcon src="./icons/yoga (1).png" text="Yoga" />
          <ServiceIcon src="./icons/zumba (1).png" text="Zumba" />
          <ServiceIcon src="./icons/weight-lifting.png" text="Weight-Lifting" />
        </section>
      </div>
    </div>
  );
};

export default Service;
