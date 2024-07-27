import React, { useContext, useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Message from "./Message";

const Request = () => {
  const navigate = useNavigate();
  const { adminAutenticated } = useContext(AdminContext);
  const [msgs, setMsgs] = useState();

  const fetchMsgs = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:4000/getAllMessages", {
        withCredentials: true,
      });
      setMsgs(res.data.data);
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.err}`);
      }
    }
  };

  useEffect(() => {
    fetchMsgs();
  }, [msgs]);
  return (
    msgs && (
      <>
        <AdminNav />
        {msgs.length === 0 && (
          <div className="empty-con">
            <h2>No Messages are there</h2>
          </div>
        )}
        <div className="messages-con">
          {msgs.map((ele, index) => {
            return <Message ele={ele} key={index} />;
          })}
        </div>
      </>
    )
  );
};

export default Request;
