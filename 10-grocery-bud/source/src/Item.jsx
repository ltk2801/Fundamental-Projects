import React from "react";

const Item = ({ item, removeItem, editItem }) => {
  return (
    <div className="single-item ">
      <input
        type="checkbox"
        id={`check-${item.id}`}
        name={`check-${item.id}`}
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <label htmlFor={`check-${item.id}`}>
        <p
          style={{
            textTransform: "capitalize",
            textDecoration: item.completed && "line-through",
            color: item.completed && "#c73a3a",
          }}
        >
          {item.name}
        </p>
      </label>

      <button className="btn remove-btn" onClick={() => removeItem(item.id)}>
        Delete
      </button>
    </div>
  );
};

export default Item;
