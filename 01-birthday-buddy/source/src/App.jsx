import { useState } from "react";
import Birthday from "./component/Birthday/Birthday";
import data from "./data";

const App = () => {
  const [persons, setPersons] = useState(data);

  const clearHandler = () => {
    setPersons([]);
  };

  return (
    <main>
      <div className="container">
        <Birthday persons={persons} clearHandler={clearHandler} />
      </div>
    </main>
  );
};
export default App;
