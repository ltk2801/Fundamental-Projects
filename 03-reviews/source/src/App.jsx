import persons from "./data";
import { useState } from "react";
import Review from "./Review";

const App = () => {
  const [index, setIndex] = useState(0);

  const person = persons[index];

  const prevHandler = () => {
    setIndex((index - 1 + persons.length) % persons.length);
  };
  const nextHandler = () => {
    setIndex((index + 1) % persons.length);
  };

  const indexs = persons.reduce((result, obj, index) => {
    result.push(index);
    return result;
  }, []);

  const randomHandler = () => {
    const indexArray = indexs.filter((ind) => ind !== index);

    // Lấy một số ngẫu nhiên từ 0 đến độ dài của mảng
    setIndex(indexArray[Math.floor(Math.random() * indexArray.length)]);
  };

  return (
    <main>
      <Review
        {...person}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        randomHandler={randomHandler}
      />
    </main>
  );
};
export default App;
