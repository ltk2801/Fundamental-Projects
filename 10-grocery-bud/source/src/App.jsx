import { useState } from "react";

import Form from "./Form";
import Items from "./Items";
import { toast, ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const App = () => {
  const [list, setList] = useState(defaultList);

  const addItem = (itemName) => {
    const id = nanoid();
    const completed = false;
    const newItem = {
      id,
      name: itemName,
      completed,
    };
    const newItems = [...list, newItem];
    setList(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId) => {
    const newListItems = list.filter((item) => item.id !== itemId);
    setList(newListItems);
    setLocalStorage(newListItems);
    toast.success("Delete item successfully !");
  };

  const editItem = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        !item.completed
          ? toast.success(`${item.name} is completed !`)
          : toast.success(`${item.name} isn't completed !`);
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setList(newList);
    setLocalStorage(newList);
  };

  return (
    <main className="section-center">
      <Form addItem={addItem} list={list} />
      <Items items={list} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
