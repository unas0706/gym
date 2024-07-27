import axios from "axios";
import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const ChangePassword = () => {
  const pwd = useRef(null);
  const changePWd = useRef(null);
  const confirmPass = useRef(null);
  const navigate = useNavigate();
  const { autenticated, user } = useContext(authContext);
  var url = `http://127.0.0.1:4000/changepassword/`;

  const back = () => {
    navigate("/singleUser");
  };

  const changePwd = async () => {
    const password = pwd.current.value;
    const changePassword = changePWd.current.value;
    const confirmPassword = confirmPass.current.value;
    console.log(password, changePassword, confirmPassword);

    if (
      user &&
      !isNaN(password) &&
      !isNaN(changePassword) &&
      !isNaN(confirmPassword)
    ) {
      url = `http://127.0.0.1:4000/changepassword/${user._id}`;
      try {
        const res = await axios.patch(
          url,
          {
            password,
            changePassword,
            confirmPassword,
          },
          {
            withCredentials: true,
          }
        );
        navigate("/singleUser");
      } catch (error) {
        if (error.response) {
          alert(`Error: ${error.response.data.err}`);
        }
      }
    }
  };

  return (
    user &&
    (autenticated === true || autenticated === "true") && (
      <div className="logIn">
        <div className="logIn-con">
          <header className="login-header">
            <h2 className="login-header-text">Change Password</h2>
          </header>
          <section className="login-form">
            <form
              action=""
              method="post"
              onSubmit={(event) => {
                event.preventDefault();
              }}
              className="login-form-ele"
            >
              <div className="inp-area">
                <input
                  ref={pwd}
                  type="text"
                  name="num"
                  id="tel-inp"
                  maxLength="10"
                  className="login-inp"
                  placeholder="Enter Old Password"
                />
                <input
                  ref={changePWd}
                  type="password"
                  name="pwd"
                  maxLength="10"
                  className="login-inp"
                  placeholder="Enter new Password"
                />
                <input
                  ref={confirmPass}
                  type="password"
                  name="pwd"
                  maxLength="10"
                  className="login-inp"
                  placeholder="Confirm new Password"
                />
              </div>

              <div className="login-btn-con">
                <button className="btn-logIn btn-back" onClick={back}>
                  {" "}
                  Back
                </button>
                <input
                  type="button"
                  value="Change Password"
                  className="btn-logIn"
                  onClick={changePwd}
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    )
  );
};

export default ChangePassword;
