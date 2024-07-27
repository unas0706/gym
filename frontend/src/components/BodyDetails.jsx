import React from "react";

const BodyDetails = ({ count, ele }) => {
  return (
    <div className="user-body-details">
      <details>
        <summary>
          <strong className="user-body-head">Month {count + 1}</strong>
        </summary>
        <hr />
        <ul className="user-body-ul">
          <li>Height : {ele.height}</li>
          <li>Weight:{ele.weight} </li>
          <li>BFT: {ele.BFT}</li>
          <li>T.B.W: {ele.TBW}</li>
          <li>Muscle Mass(%): {ele.MuscleMass}</li>
          <li>Bone Mass(%):{ele.boneMass} </li>
          <li>Calories: {ele.calories}</li>
          <li>B.M.I: {ele.BMI}</li>
        </ul>
      </details>
    </div>
  );
};

export default BodyDetails;
