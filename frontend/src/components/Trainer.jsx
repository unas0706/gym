import React from "react";

const Trainer = () => {
  return (
    <div className="trainer review-section">
      <header className="review-section-header">
        Meet Our <br />
        <strong className="review-section-header-text">Trainers</strong>
      </header>
      <section className="trainer-section">
        <div className="trainer-profile">
          <img src="./images/trainer.jpeg" alt="" className="trainer-img" />
          <div className="trainer-detials">
            <p className="trainer-details-header">Details</p>
            <div className="trainer-details-body">
              <strong>Name:</strong>Unas Ali <br />
              <strong>Age:</strong>27 Years <br />
              <strong>Experience:</strong>6+ Years <br />
              <strong>Trains:</strong>Weight Lifting, Body Building , Zumba,
              Yoga, Cardio
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainer;
