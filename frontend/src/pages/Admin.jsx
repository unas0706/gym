import React, { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ProfileCard from "../components/ProfileCard";
import { AdminContext } from "../context/AdminContext";
import AdminNav from "../components/AdminNav";

const Admin = () => {
  const navigate = useNavigate();
  const inpRef = useRef();
  const { users, changeUsers, filter, setFilter } = useContext(AdminContext);

  useEffect(() => {
    const Admintoken = Cookies.get("adminToken");
    if (Admintoken) {
      navigate("/admin");
    } else {
      navigate("/AdminLogIn");
    }
    if (users) {
      setFilter(users);
    }
  }, [users]);
  const filterUsers = () => {
    let arg = inpRef.current.value;
    changeUsers(arg);
  };

  return (
    filter && (
      <>
        <AdminNav />
        <section className="adminsearch">
          <input
            type="text"
            className="login-inp inp-admin"
            placeholder="Search"
            onInput={filterUsers}
            ref={inpRef}
          />
        </section>
        <section className="adminBody">
          {filter.map((ele, index) => {
            return <ProfileCard ele={ele} key={index} />;
          })}
          {filter.map((ele, index) => {
            return <ProfileCard ele={ele} key={index} />;
          })}
          {filter.map((ele, index) => {
            return <ProfileCard ele={ele} key={index} />;
          })}
          {filter.map((ele, index) => {
            return <ProfileCard ele={ele} key={index} />;
          })}
          {filter.map((ele, index) => {
            return <ProfileCard ele={ele} key={index} />;
          })}
          {filter.map((ele, index) => {
            return <ProfileCard ele={ele} key={index} />;
          })}
          {filter.map((ele, index) => {
            return <ProfileCard ele={ele} key={index} />;
          })}
          {filter.map((ele, index) => {
            return <ProfileCard ele={ele} key={index} />;
          })}
          {/* <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard /> */}
        </section>
        <section className="add-month">
          <div
            className="add-month-btn-con"
            onClick={() => {
              navigate("addUser");
            }}
          >
            <img src="../icons/add.png" alt="" className="add-img" />
          </div>
        </section>
      </>
    )
  );
};

export default Admin;
