import React from "react";
import Person from "../Person/Person";

const Birthday = ({ persons, clearHandler }) => {
  return (
    <div>
      <h3>{persons.length} Birthdays Today</h3>
      {persons.map((person) => (
        <Person {...person} key={person.id} />
      ))}
      <button className="btn btn-block" type="button" onClick={clearHandler}>
        Clear All
      </button>
    </div>
  );
};

export default Birthday;
