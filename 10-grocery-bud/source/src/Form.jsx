import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

const Form = ({ addItem, list }) => {
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Not be Empty !");
      return;
    }
    if (list.find((item) => item.name === name)) {
      toast.error("Item name is duplicated !");
      return;
    }

    addItem(name);
    toast.success("Add item successfully !");
    setName("");
  };

  return (
    <form onSubmit={submitHandler}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          id="item"
          name="item"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
