import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const nameRef = useRef();
  const NumberRef = useRef();
  const genderRef = useRef();
  const ageRef = useRef();
  const navigate = useNavigate();

  const addUserFunction = async () => {
    let name = nameRef.current.value;
    let Number = NumberRef.current.value;
    let gender = genderRef.current.value;
    let age = ageRef.current.value;
    if (!name && !Number && !gender && !age) {
      return alert("Please Fill the form");
    }
    if (Number.length !== 10 && isNaN(Number)) {
      return alert("Enter Proper Number");
    }
    if (isNaN(age)) {
      return alert("Please Enter Proper Age");
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/addUser`,
        {
          Number,
          name,
          gender,
          role: "user",
        },
        {
          withCredentials: true,
        }
      );
      if (response.data.sucess) {
        navigate("/admin");
      }
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.err}`);
      }
    }
  };

  return (
    <div className="addUser-con">
      <section className="addUser">
        <header className="login-header">
          <h2 className="login-header-text">Add User</h2>
        </header>
        <form
          action="#"
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="form-add-user"
        >
          <input
            type="text"
            ref={nameRef}
            className="adduser-inp"
            placeholder="Name"
          />
          <input
            type="text"
            ref={NumberRef}
            className="adduser-inp"
            placeholder="Number"
          />
          <select name="gender" ref={genderRef} className="adduser-inp">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Others">Otherss</option>
          </select>
          <input
            type="text"
            ref={ageRef}
            className="adduser-inp"
            placeholder="Age"
          />
        </form>
        <div className="adduser-btn-con">
          <Link to="/admin" className="btn-adduser btn-back-adduser">
            Back
          </Link>
          <input
            type="submit"
            value="Add User"
            className="btn-adduser"
            onClick={addUserFunction}
          />
        </div>
      </section>
    </div>
  );
};

export default AddUser;
