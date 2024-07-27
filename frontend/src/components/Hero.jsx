import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <section className="quotes">
        <h2 className="main-quote">Join The World Of Fiteness</h2>
        <p className="sub-quote">
          Our aim is to bring more people into fitnesss so that every
          individual, family, society,and whole nation
        </p>
        <div className="button-holder">
          <a href="#Contact" className="btn btn-hero">
            Join Us
          </a>
        </div>
      </section>
      <section className="hero-img"></section>
    </div>
  );
};

export default Hero;
