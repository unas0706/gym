import React from "react";
import { Link } from "react-router-dom";

const Li = ({ name, active, click }) => {
  const className = active ? "link active hidden-xs" : "link hidden-xs";
  return (
    <li>
      <a href={`#${name}`} onClick={click} className={className}>
        {name}
      </a>
    </li>
  );
};

export default Li;
