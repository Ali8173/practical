import { useState } from "react";
import TodoList from "./todoList";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  const addItems = () => {
    if (todo.trim() === "") return;
    setItems([...items, todo]);
    setTodo("");
  };

  return (
    <div className="bg-gray-50 border border-gray-200 shadow-xl p-4 rounded-xl">
      <h1 className="text-3xl text-left font-bold mb-4 text-[#32373E]">
        Todo List
      </h1>
      <input
        placeholder="What to do"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        className="rounded-lg w-64 py-2 px-1 border border-gray-300 focus:outline-none"
      />
      <button
        onClick={addItems}
        className="ml-2 border rounded-lg px-2 bg-green-500 shadow-lg trnasition-trnasform duration-300 hover:scale-95 hover:bg-green-550 text-gray-100 py-2"
      >
        Add
      </button>
      <TodoList items={items} setItems={setItems} />
    </div>
  );
};

export default Todo;
