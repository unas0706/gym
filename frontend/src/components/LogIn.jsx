import React, { useContext, useRef, useEffect } from "react";
import { authContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LogIn = () => {
  const numRef = useRef(null);
  const pwdRef = useRef(null);
  const navigate = useNavigate();
  const { setautenticated, autenticated } = useContext(authContext);
  useEffect(() => {
    if (autenticated) {
      navigate("/singleUser");
    }
  });
  const login = async () => {
    let url = import.meta.env.VITE_BACKEND_URL;
    const Number = numRef.current.value;
    const password = pwdRef.current.value;
    if (!isNaN(Number) && Number.length === 10) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/userLogin`,
          {
            Number,
            password,
            role: "user",
          },
          {
            withCredentials: true,
          }
        );
        if (res.data.sucess) {
          // localStorage.setItem("autenticated", true);
          setautenticated(true);
          navigate("/singleUser");
          // Cookies.set("userToken", res.data.token, {
          //   expires: 7,
          //   path: "/",
          //   secure: true,
          // });
          console.log(
            "Access-Control-Allow-Origin:",
            res.headers["access-control-allow-origin"]
          );
          console.log(
            "Access-Control-Allow-Credentials:",
            res.headers["access-control-allow-credentials"]
          );
          console.log(
            "Access-Control-Allow-Headers:",
            res.headers["access-control-allow-headers"]
          );
          console.log(
            "Access-Control-Allow-Methods:",
            res.headers["access-control-allow-methods"]
          );
          console.log(
            "Access-Control-Expose-Headers:",
            res.headers["access-control-expose-headers"]
          );
        }
      } catch (error) {
        if (error.response) {
          alert(`Error: ${error.response.data.err}`);
        }
      }
    } else {
      alert("Enter Proper Phone Number");
    }
  };
  return (
    <div className="logIn">
      <div className="logIn-con">
        <header className="login-header">
          <h2 className="login-header-text">Log In</h2>
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
                ref={numRef}
                type="text"
                name="num"
                id="tel-inp"
                maxLength="10"
                className="login-inp"
                placeholder="Enter Your Number"
              />
              <input
                ref={pwdRef}
                type="password"
                name="pwd"
                className="login-inp"
                placeholder="Enter Your Password"
              />
            </div>

            <div className="login-btn-con">
              <input
                type="button"
                value="LogIn"
                className="btn-logIn"
                onClick={login}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default LogIn;
