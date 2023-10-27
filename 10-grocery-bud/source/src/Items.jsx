import React from "react";
import Item from "./Item";

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items?.map((item) => (
        <Item
          item={item}
          key={item.id}
          removeItem={removeItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
};

export default Items;
