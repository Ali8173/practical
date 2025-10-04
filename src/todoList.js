const TodoList = ({ items, setItems }) => {
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  return (
    <ul className="mt-4">
      {items.map((item, index) => {
        return (
          <>
            <div className="flex justify-between py-2 px-1 ">
              <li className="text-[#32373E]" key={index}>
                {item}
              </li>
              <button
                onClick={() => removeItem(index)}
                className="border rounded-lg px-2 bg-red-500 shadow-xl trnasition-trnasform duration-300 hover:scale-95 hover:bg-red-550 text-gray-100"
              >
                Done
              </button>
            </div>
            {index !== items.length - 1 && <hr />}
          </>
        );
      })}
    </ul>
  );
};

export default TodoList;
