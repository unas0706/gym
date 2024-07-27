import React, { useRef, useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";

const AddMonth = () => {
  const id = useParams();
  const heightRef = useRef();
  const weightRef = useRef();
  const BFTRef = useRef();
  const TBWRef = useRef();
  const boneMassRef = useRef();
  const MuscleMassRef = useRef();
  const caloriesRef = useRef();
  const BMIRef = useRef();
  const [user, setUser] = useState();
  const { users } = useContext(AdminContext);
  const navigate = useNavigate();

  const Month = async () => {
    let height = heightRef.current.value;
    let weight = weightRef.current.value;
    let BFT = BFTRef.current.value;
    let TBW = TBWRef.current.value;
    let boneMass = boneMassRef.current.value;
    let MuscleMass = MuscleMassRef.current.value;
    let calories = caloriesRef.current.value;
    let BMI = BMIRef.current.value;
    if (
      !height &&
      !weight &&
      !BFT &&
      !TBW &&
      !boneMass &&
      !MuscleMass &&
      !calories &&
      !BMI
    ) {
      return alert("Please Fill the form ");
    }
    if (user) {
      user.month[user.month.length] = {
        height,
        weight,
        BFT,
        TBW,
        boneMass,
        MuscleMass,
        calories,
        BMI,
      };
      try {
        const res = await axios.patch(
          `http://127.0.0.1:4000/updateUser/${id.id}`,
          {
            month: user.month,
          },
          {
            withCredentials: true,
          }
        );
        if (res.data.sucess) {
          navigate(`/admin/${id.id}`);
        }
      } catch (error) {
        if (error.response) {
          alert(`Error: ${error.response.data.err}`);
        }
      }
    }
  };
  const fetchUser = async (id) => {
    const filterUser = users.filter((ele) => {
      return ele._id === id;
    });
    setUser(filterUser[0]);
  };

  useEffect(() => {
    if (users) fetchUser(id.id);
  }, [users]);

  return (
    <div className="addUser-con">
      <section className="addUser addMonth">
        <header className="login-header addMonth-header">
          <h2 className="login-header-text">Add Month</h2>
        </header>
        <form
          action="#"
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="form-add-user form-addMonth"
        >
          <input
            ref={heightRef}
            type="text"
            className="adduser-inp addMonth-inp"
            placeholder="Height"
          />
          <input
            ref={weightRef}
            type="text"
            className="adduser-inp addMonth-inp"
            placeholder="Weight"
          />
          <input
            ref={BFTRef}
            type="text"
            className="adduser-inp addMonth-inp"
            placeholder="BFT"
          />
          <input
            ref={TBWRef}
            type="text"
            className="adduser-inp addMonth-inp"
            placeholder="T.B.W"
          />
          <input
            ref={MuscleMassRef}
            type="text"
            className="adduser-inp addMonth-inp"
            placeholder="Muscle Mass(%)"
          />
          <input
            ref={boneMassRef}
            type="text"
            className="adduser-inp addMonth-inp"
            placeholder="Bone Mass(%)"
          />
          <input
            ref={caloriesRef}
            type="text"
            className="adduser-inp addMonth-inp"
            placeholder="Calories"
          />
          <input
            ref={BMIRef}
            type="text"
            className="adduser-inp addMonth-inp"
            placeholder="B.M.I"
          />
        </form>
        <div className="adduser-btn-con addMonth-btn-con">
          <Link
            to={`/admin/${id.id}`}
            className="btn-adduser btn-back-adduser btn-addMonth"
          >
            Back
          </Link>
          <input
            type="submit"
            value="Submit"
            className="btn-adduser btn-addMonth"
            onClick={Month}
          />
        </div>
      </section>
    </div>
  );
};

export default AddMonth;
