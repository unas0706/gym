import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ ele }) => {
  return (
    <Link to={`${ele._id}`} className="profile-link">
      <div className="profilecard">
        <img src="./images/me.png" alt="" className="profile-img" />
        <p className="profile-name">{ele.name}</p>
      </div>
    </Link>
  );
};

export default ProfileCard;
