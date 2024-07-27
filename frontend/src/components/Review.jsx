import React, { useState } from "react";
import ReviewContent from "./ReviewContent";

const Review = () => {
  const reviews = [
    {
      content: `" I recently joined Fitness Hub and have been thoroughly impressed. The
          facility is spacious and equipped with state-of-the-art machines. The
          staff is friendly and always ready to assist, creating a welcoming
          atmosphere. The variety of classes offered caters to all fitness levels,
          ensuring a dynamic and engaging workout experience. Highly recommend it
          for anyone looking to elevate their fitness journey! "" I recently joined Fitness Hub and have been thoroughly impressed. The
          facility is spacious and equipped with state-of-the-art machines. The
          staff is friendly and always ready to assist, creating a welcoming
          atmosphere. The variety of classes offered caters to all fitness levels,
          ensuring a dynamic and engaging workout experience. Highly recommend it
          for anyone looking to elevate their fitness journey! "`,
      name: "Unas Ali, Student",
    },
    {
      content: `" I recently joined Fitness Hub and have been thoroughly impressed. The
          facility is spacious and equipped with state-of-the-art machines. The
          staff is friendly and always ready to assist, creating a welcoming
          atmosphere. The variety of classes offered caters to all fitness levels,
          ensuring a dynamic and engaging workout experience. Highly recommend it
          for anyone looking to elevate their fitness journey! "`,
      name: "Lok Charan, Student",
    },
    {
      content: `" I recently joined Fitness Hub and have been thoroughly impressed. The
          facility is spacious and equipped with state-of-the-art machines. The
          staff is friendly and always ready to assist, creating a welcoming
          atmosphere. The variety of classes offered caters to all fitness levels,
          ensuring a dynamic and engaging workout experience. Highly recommend it
          for anyone looking to elevate their fitness journey! "`,
      name: "Akhil , Student",
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <div className="review-section">
      <header className="review-section-header">
        Stories of our <br />
        <strong className="review-section-header-text">BODYFIT</strong> Family
      </header>

      <section className="review-content">
        {/* <div className="review-quote-img-holder-1">
          <img src="./icons/quote (1).png" alt="" className="quote-img" />
        </div> */}
        <ReviewContent reviews={reviews} index={index} setIndex={setIndex} />

        {/* <div className="review-quote-img-holder-1">
          <img src="./icons/quotes.png" alt="" className="quote-img img-2" />
        </div> */}
      </section>
    </div>
  );
};

export default Review;
