import React from "react";

import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeHandler }) => {
  const [showMore, setShowMore] = useState(false);

  const textInfo = showMore ? info : `${info.slice(0, 200)}...`;

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {textInfo}{" "}
          <button
            type="button"
            className="info-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </p>

        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeHandler(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
