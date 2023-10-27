import React from "react";
import Item from "./Item";

const Menu = ({ foods }) => {
  return (
    <div className="section-center">
      {foods.map((food) => (
        <Item key={food.id} {...food} />
      ))}
    </div>
  );
};

export default Menu;
