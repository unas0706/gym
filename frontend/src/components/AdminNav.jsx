import React, { useContext, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AdminContext } from "../context/AdminContext";
import AdminMore from "../components/AdminMore";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AdminNav = () => {
  const navigate = useNavigate();
  const { adminAutenticated, setAdminAutenticated } = useContext(AdminContext);
  const logOut = () => {
    // localStorage.setItem("autenticated", "false");
    Cookies.remove("adminToken");
    setAdminAutenticated(false);
    navigate("/");
  };
  const [myStyle, setMyStyle] = useState({
    display: "none",
  });

  const closeNav = () => {
    setMyStyle({ display: "block" });
    const ele = document.getElementsByTagName("body")[0];
    ele.style.overflow = "hidden";
  };
  const openNav = () => {
    setMyStyle({ display: "none" });
    const ele = document.getElementsByTagName("body")[0];
    ele.style.overflow = "scroll";
  };

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <Link to="/" id="navLink">
            <div id="logo-img"></div>
            <p id="logo-name">BODYFIT</p>
          </Link>
        </div>
        <div id="navlinks">
          <ul className="navigationlinks navigation-login">
            <Link className="link hidden-xs" to="/">
              Home
            </Link>
            <Link
              style={{ marginLeft: "5%" }}
              className="link hidden-xs"
              to="/admin"
            >
              Profile
            </Link>
            <Link
              style={{ marginLeft: "5%" }}
              className="link hidden-xs"
              to="/admin/request"
            >
              Request
            </Link>

            <Link
              className="link hidden-xs"
              to="/admin/changePassword"
              style={{ margin: "5%" }}
            >
              Change Password
            </Link>
            <button className="btn hidden-xs" onClick={logOut}>
              Log out
            </button>
            {myStyle.display === "none" ? (
              <button className="btn-xs visible-xs" onClick={closeNav}>
                <GiHamburgerMenu />
              </button>
            ) : (
              <button className="btn-xs cancel visible-xs" onClick={openNav}>
                <MdOutlineCancel />
              </button>
            )}
          </ul>
        </div>
      </nav>
      <AdminMore setMyStyle={setMyStyle} myStyle={myStyle} />
    </>
  );
};

export default AdminNav;
