import React, { useContext } from "react";
import XsLi from "./XsLi";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { AdminContext } from "../context/AdminContext";

const AdminMore = ({ myStyle }) => {
  const { adminAutenticated, setAdminAutenticated } = useContext(AdminContext);
  const logOut = () => {
    Cookies.remove("adminToken");
    setAdminAutenticated(false);
    navigate("/");
  };
  const navigate = useNavigate();

  return (
    <div className="more visible-xs" style={myStyle}>
      <section className="more-options">
        <XsLi name="Home" />
        <XsLi name="Contact" />
        {adminAutenticated && (
          <p className="options-p">
            <Link to="/admin" className="options">
              Profile
            </Link>
          </p>
        )}
        {adminAutenticated && (
          <p className="options-p">
            <Link to="/admin/request" className="options">
              Request
            </Link>
          </p>
        )}
        {adminAutenticated && (
          <p className="options-p">
            <Link to="/admin/changePassword" className="options">
              Change Password
            </Link>
          </p>
        )}
        {adminAutenticated && (
          <p className="options-p">
            <button className="btn btn-more" onClick={logOut}>
              Log Out
            </button>
          </p>
        )}
        {!adminAutenticated && (
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

export default AdminMore;
