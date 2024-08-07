import axios from "axios";
import React from "react";

const Message = ({ ele }) => {
  const DeleteMsg = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/deleteMessage/${ele._id}`,
        {
          withCredentials: true,
        }
      );
      alert(res.data.message);
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.err}`);
      }
    }
  };
  return (
    <section className="message">
      <div className="text-con">
        <p className="msg-text">
          <strong>Name:</strong>
          {ele.name}
        </p>
        <p className="msg-text">
          <strong>Number:</strong>
          <a href="tel:+919502264332">{ele.Number}</a>
        </p>
      </div>
      <div className="dlt-btn-con">
        <button className="dlt-btn req-dlt-btn" onClick={DeleteMsg}>
          Delete
        </button>
      </div>
    </section>
  );
};

export default Message;
