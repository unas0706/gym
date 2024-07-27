import React, { useRef, useState } from "react";

const ReviewContent = ({ index, reviews, setIndex }) => {
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const scrollleft = () => {
    setIsLast(false);
    if (index - 1 === 0) {
      setIsFirst(true);
    }
    setIndex(index - 1);
  };
  const scrollRight = () => {
    setIsFirst(false);
    if (index + 1 === reviews.length - 1) {
      setIsLast(true);
    }
    setIndex(index + 1);
  };
  return (
    <div className="review-section-main-content">
      <p className="main-text-review">
        {" "}
        {reviews[index].content.slice(0, 500) + "..."}
      </p>
      <div className="review-reviewer">
        <div className="review-stars review-stars-1">
          <img src="./icons/star.png" alt="" className="star" />
          <img src="./icons/star.png" alt="" className="star" />
          <img src="./icons/star.png" alt="" className="star" />
          <img src="./icons/star.png" alt="" className="star" />
          <img src="./icons/star.png" alt="" className="star" />
        </div>
        <div className="review-stars">{reviews[index].name}</div>
        <div className="review-stars review-count">
          <button
            className="btn btn-scroll "
            disabled={isFirst}
            onClick={scrollleft}
          >
            <strong>&larr;</strong>
          </button>
          <i className="hidden-xs">REVIEW: </i>
          {index + 1}/3
          <button
            className="btn btn-scroll "
            disabled={isLast}
            onClick={scrollRight}
          >
            <strong>&rarr;</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewContent;
