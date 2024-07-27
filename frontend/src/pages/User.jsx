import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import Cookies from "js-cookie";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import More from "../components/More";
import UserBody from "../components/UserBody";

const user = () => {
  const navigate = useNavigate();
  const { setautenticated, autenticated, user } = useContext(authContext);

  // const fetchData = async () => {
  //   const res = await axios.get("http://127.0.0.1:4000/singleUser", {
  //     withCredentials: true,
  //   });
  //   setUser(res.data.user);
  // };

  // useEffect(() => {
  //   fetchData();
  //   const localData = localStorage.getItem("autenticated");
  //   setautenticated(localData);
  // }, []);

  const logOut = () => {
    // localStorage.setItem("autenticated", "false");
    Cookies.remove("userToken");
    setautenticated(false);
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
    user &&
    (autenticated === true || autenticated === "true") && (
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
                className="link hidden-xs"
                to="/changePassword"
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
        <More setMyStyle={setMyStyle} myStyle={myStyle} />

        <UserBody />
      </>
    )
  );
};

export default user;
