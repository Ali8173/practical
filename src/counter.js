import { useState } from "react";
import { useEffect } from "react";

const Counter = () => {
  const [number, setNumber] = useState(() => {
    const saved = localStorage.getItem("number");
    return saved ? JSON.parse(saved) : 0;
  });

  const increaseNum = () => {
    setNumber((prev) => prev + 1);
  };
  const reduceNum = () => {
    setNumber((prev) => prev - 1);
  };

  useEffect(() => {
    localStorage.setItem("number", JSON.stringify(number));
  }, [number]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-5xl font-bold  text-center">Counter</h1>
        <p className="text-7xl text-center mb-3">{number}</p>
        <div className="flex gap-2">
          <button
            onClick={increaseNum}
            className="px-4 border-2 border-black rounded-lg"
          >
            Increment
          </button>
          <button
            onClick={reduceNum}
            className="px-4 border-2 border-black rounded-lg"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
