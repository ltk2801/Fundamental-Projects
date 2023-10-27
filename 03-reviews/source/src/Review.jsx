import React from "react";

import { BiSolidQuoteRight } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = ({
  id,
  name,
  job,
  image,
  text,
  prevHandler,
  nextHandler,
  randomHandler,
}) => {
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <div className="quote-icon">
          <BiSolidQuoteRight style={{ fontSize: "20px" }} />
        </div>
      </div>
      <div className="btn-container">
        <h3 className="author">{name}</h3>
        <h5 className="job">{job}</h5>
        <p className="info">{text}</p>
      </div>
      <div className="btn-container">
        <FaChevronLeft className="prev-btn" onClick={() => prevHandler()} />
        <FaChevronRight className="next-btn" onClick={() => nextHandler()} />
      </div>
      <button
        className="btn btn-hipster btn-container"
        onClick={() => randomHandler()}
      >
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
