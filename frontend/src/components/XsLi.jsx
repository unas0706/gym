import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const XsLi = ({ name, setMyStyle }) => {
  const closeNav = () => {
    console.log(12);
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
    <p className="options-p">
      <Link to="/" className="options" onClick={openNav}>
        {name}
      </Link>
    </p>
  );
};

export default XsLi;
