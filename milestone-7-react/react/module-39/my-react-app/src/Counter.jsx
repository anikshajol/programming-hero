import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;

    setCount(newCount);
  };
  const handleReduce = () => {
    const newCount = count - 1;

    if (newCount < 0) {
      count = 0;
    }

    setCount(newCount);
  };

  return (
    <div style={{ border: "2px solid red" }}>
      <h3>Count: {count} </h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}

export default Counter;
