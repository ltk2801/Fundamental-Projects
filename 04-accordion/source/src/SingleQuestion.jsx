import React, { useState } from "react";
import { useEffect } from "react";
import { BsDash, BsPlusLg } from "react-icons/bs";

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId;

  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            toggleQuestion(id);
          }}
        >
          {isActive ? <BsDash /> : <BsPlusLg />}
        </button>
      </header>
      {isActive && <p> {info}</p>}
    </div>
  );
};

export default SingleQuestion;
