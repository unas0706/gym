import React from "react";

const Facility = ({ src, title, desc }) => {
  return (
    <div className="facilty">
      <section className="facility-img-con">
        <img src={src} alt="" className="facility-img" />
      </section>
      <section className="facility-text-con">
        <p className="facility-text-head">{title}</p>
        <p className="facility-text-desc">{desc}</p>
      </section>
    </div>
  );
};

export default Facility;
