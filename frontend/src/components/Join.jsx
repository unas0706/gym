import axios from "axios";
import React, { useRef } from "react";

const Join = () => {
  const nameRef = useRef();
  const numberRef = useRef();
  const sendMessage = async () => {
    let name = nameRef.current.value;
    let Number = numberRef.current.value;
    if (!name && !Number) {
      return alert("Please fill the form");
    }
    if (Number.length !== 10 && !isNaN(Number)) {
      return alert("Please Enter proper Number");
    }
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/sendMessage`,
        {
          name,
          Number,
        },
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
    <div className="review-section" id="Contact">
      <header className="review-section-header">
        What`s
        <br />
        <strong className="review-section-header-text">Stopping</strong> You?
      </header>
      <section className="join-section">
        <div className="join-img hidden-xs"></div>
        <div className="join-form">
          <form
            className="form"
            action=""
            onSubmit={(event) => {
              event.preventDefault();
            }}
            method="POST"
          >
            <strong>Become a part of our family</strong> <br />
            Leave your details and we will get back to you!
            <input
              required
              type="text"
              className="inp"
              name="name"
              ref={nameRef}
              placeholder="Enter your full name"
            />
            <input
              required
              className="inp"
              type="text"
              ref={numberRef}
              name="number"
              placeholder="Enter your phone Number"
            />
            <input
              type="button"
              value="Join Us"
              className="btn btn-sub"
              onClick={sendMessage}
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Join;
