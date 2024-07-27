import React, { useContext } from "react";
import XsLi from "./XsLi";
import { authContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const More = ({ myStyle, setMyStyle }) => {
  const { autenticated, setautenticated } = useContext(authContext);
  const logOut = () => {
    Cookies.remove("userToken");
    setautenticated(false);
    navigate("/");
  };
  const navigate = useNavigate();

  return (
    <div className="more visible-xs" style={myStyle}>
      <section className="more-options">
        <XsLi name="Home" setMyStyle={setMyStyle} />
        <XsLi name="Services" setMyStyle={setMyStyle} />
        <XsLi name="Facilities" setMyStyle={setMyStyle} />
        <XsLi name="Contact" setMyStyle={setMyStyle} />
        {autenticated && (
          <p className="options-p">
            <Link to="/singleUser" className="options">
              Profile
            </Link>
          </p>
        )}
        {autenticated && (
          <p className="options-p">
            <Link to="/changePassword" className="options">
              Change Password
            </Link>
          </p>
        )}
        {autenticated && (
          <p className="options-p">
            <button className="btn btn-more" onClick={logOut}>
              Log Out
            </button>
          </p>
        )}
        {!autenticated && (
          <p className="options-p">
            <button
              className="btn btn-more"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log In
            </button>
          </p>
        )}
      </section>
    </div>
  );
};

export default More;
