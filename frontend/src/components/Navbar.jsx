import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Li from "./Li";
import Cookies from "js-cookie";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { authContext } from "../context/AuthContext";

const Navbar = ({ myStyle, setMyStyle }) => {
  const { autenticated, setautenticated } = useContext(authContext);

  const [active, setActive] = useState("Home");
  const changeActiveFunction = (name) => {
    setActive(name);
  };
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
  const logOut = () => {
    // localStorage.setItem("autenticated", "false");
    Cookies.remove("userToken");
    setautenticated(false);
  };

  return (
    <nav className="nav" id="Home">
      <div className="logo">
        <Link to="/" id="navLink">
          <div id="logo-img"></div>
          <p id="logo-name">BODYFIT</p>
        </Link>
      </div>
      <div id="navlinks">
        <ul className="navigationlinks">
          <Li
            name="Home"
            click={() => {
              changeActiveFunction("Home");
            }}
            active={active === "Home"}
          />
          <Li
            name="Facilities"
            click={() => {
              changeActiveFunction("About");
            }}
            active={active === "About"}
          />
          <Li
            name="Services"
            click={() => {
              changeActiveFunction("Services");
            }}
            active={active === "Services"}
          />
          <Li
            name="Contact"
            click={() => {
              changeActiveFunction("Contact");
            }}
            active={active === "Contact"}
          />
          {autenticated && (
            <Link className="link hidden-xs" to="/singleUser">
              Profile
            </Link>
          )}
          {myStyle.display === "none" ? (
            <button className="btn-xs visible-xs" onClick={closeNav}>
              <GiHamburgerMenu />
            </button>
          ) : (
            <button className="btn-xs cancel visible-xs" onClick={openNav}>
              <MdOutlineCancel />
            </button>
          )}

          {autenticated && (
            <button className="btn hidden-xs" onClick={logOut}>
              Log out
            </button>
          )}
          {!autenticated && (
            <Link to="/login" className="btn hidden-xs">
              Log In
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
