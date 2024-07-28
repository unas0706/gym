import React, { useContext, useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { AdminContext } from "../context/AdminContext";
import BodyDetails from "./BodyDetails";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AdminUser = () => {
  const { users } = useContext(AdminContext);
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const id = useParams();
  const fetchUser = async (id) => {
    const filterUser = users.filter((ele) => {
      return ele._id === id;
    });
    setUser(filterUser[0]);
  };

  const deletUser = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/deleteUser/${id.id}`,
        {
          withCredentials: true,
        }
      );
      alert(res.data.message);

      navigate("/admin");
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.err}`);
      }
    }
  };

  useEffect(() => {
    if (users) fetchUser(id.id);
  }, [users]);

  return (
    users &&
    user && (
      <>
        <AdminNav />
        <div className="login-body">
          <section className="user-detials">
            <div className="user-img-holder">
              <img src="../images/user.png" alt="" className="user-img" />
            </div>

            <div className="user-details-area">
              <div className="user-personal-info">
                <strong>NAME:</strong> {user.name} <br /> <br />
                <strong>GENDER:</strong> {user.gender} <br /> <br />
                <strong>NUMBER:</strong> {user.Number} <br /> <br />
              </div>
              <div className="user-personal-edit">
                <section className="dlt-btn-holder">
                  <button className="dlt-btn" onClick={deletUser}>
                    DELETE
                  </button>
                </section>
                <section
                  className="edit-btn-holder dlt-btn-holder"
                  onClick={() => {
                    navigate(`/admin/editUser/${id.id}`);
                  }}
                >
                  <img src="../icons/editing.png" alt="" className="edit-img" />
                  <p className="edit-text">Edit</p>
                </section>
              </div>
            </div>
          </section>

          <section className="user-gym-details">
            {user.month.map((ele, index) => {
              return <BodyDetails key={index} ele={ele} count={index} />;
            })}
          </section>

          <section className="add-month">
            <div
              className="add-month-btn-con"
              onClick={() => {
                navigate(`/admin/addMonth/${id.id}`);
              }}
            >
              <img src="../icons/add.png" alt="" className="add-img" />
            </div>
          </section>
        </div>
      </>
    )
  );
};

export default AdminUser;
