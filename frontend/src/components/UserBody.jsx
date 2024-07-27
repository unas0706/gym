import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
import BodyDetails from "../components/BodyDetails";

const UserBody = () => {
  const { user } = useContext(authContext);
  return (
    <div className="login-body">
      <section className="user-detials">
        <div className="user-img-holder">
          <img src="./images/user.png" alt="" className="user-img" />
        </div>

        <div className="user-details-area">
          <div className="user-personal-info">
            <strong>NAME:</strong> {user.name} <br /> <br />
            <strong>GENDER:</strong> {user.gender} <br /> <br />
            <strong>NUMBER:</strong> {user.Number} <br /> <br />
          </div>
        </div>
      </section>

      <section className="user-gym-details">
        {user.month.map((ele, index) => {
          return <BodyDetails key={index} ele={ele} count={index} />;
        })}
      </section>
    </div>
  );
};

export default UserBody;
