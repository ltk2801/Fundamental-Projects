import React, { useState } from "react";

import SingleQuestion from "./SingleQuestion";

const Question = ({ questions }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <div className="container">
      <h1>Questions</h1>
      {questions.map((quest) => (
        <SingleQuestion
          key={quest.id}
          {...quest}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      ))}
    </div>
  );
};

export default Question;
