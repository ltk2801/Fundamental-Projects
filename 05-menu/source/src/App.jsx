import Header from "./Header";
import Menu from "./Menu";

import data from "./data";
import { useState } from "react";
import { useEffect } from "react";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [keyFilter, setKeyFilter] = useState("all");
  const [foods, setFoods] = useState([]);

  const [categories, setCategories] = useState(allCategories);

  useEffect(() => {
    const foodsNext =
      keyFilter === "all"
        ? data
        : data.filter((food) => food.category === keyFilter);

    setFoods(foodsNext);
  }, [keyFilter]);

  return (
    <main className="container menu ">
      <Header
        categories={categories}
        setKeyFilter={setKeyFilter}
        text="Our Menu"
      />
      <Menu foods={foods} />
    </main>
  );
};
export default App;
