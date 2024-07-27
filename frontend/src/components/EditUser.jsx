import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const nameRef = useRef();
  const NumberRef = useRef();
  const genderRef = useRef();
  const ageRef = useRef();
  const id = useParams();
  const navigate = useNavigate();

  const edit = async () => {
    const name = nameRef.current.value;
    const Number = NumberRef.current.value;
    const gender = genderRef.current.value;
    const age = ageRef.current.value;
    if (!name || !gender || !age || !Number) {
      return alert("Please Fill the form");
    }
    if (Number.length !== 10 && isNaN(Number)) {
      return alert("Enter Proper Number");
    }
    if (isNaN(age)) {
      return alert("Please Enter Proper Age");
    }
    try {
      const res = await axios.patch(
        `http://127.0.0.1:4000/updateUser/${id.id}`,
        {
          Number,
          name,
          gender,
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
  };

  return (
    <div className="addUser-con">
      <section className="addUser">
        <header className="login-header">
          <h2 className="login-header-text">Edit User</h2>
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
            className="adduser-inp"
            ref={nameRef}
            placeholder="Name"
          />
          <input
            type="text"
            className="adduser-inp"
            ref={NumberRef}
            placeholder="Number"
          />
          <select name="gender" ref={genderRef} className="adduser-inp">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
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
            value="Save"
            className="btn-adduser"
            onClick={edit}
          />
        </div>
      </section>
    </div>
  );
};

export default EditUser;
