import React from "react";
import Facility from "./Facility";

const Faclities = () => {
  return (
    <div className="service faclities" id="Facilities">
      <header className="review-section-header">
        Our <br />
        <strong className="review-section-header-text">Facilities</strong>
      </header>
      <div className="facilites-con">
        <Facility
          title="Free Wifi"
          desc="Stay Conneted with world while you work yourself out"
          src="./images/Wireless.jpeg"
        />
        <Facility
          title="High Tech GYM"
          desc="Build yourself with the best available equipments in the market."
          src="./images/hightech.jpeg"
        />
        <Facility
          title="Changing Rooms"
          desc="Sanitary changing room with proper privacy."
          src="./images/change.jpeg"
        />
        <Facility
          title="Lockers"
          desc="Clean, safe and sanitary environment to keep your stuffs"
          src="./images/Lockers.jpeg"
        />
        <Facility
          title="Personal Trainer"
          desc="You benifit from the monthly care of a Personal Trainer"
          src="./images/trainer.jpeg"
        />
        <Facility
          title="Charging Points"
          desc="Enjoy the convenience of charging points for all your devices."
          src="./images/charging.jpeg"
        />
      </div>
    </div>
  );
};

export default Faclities;
