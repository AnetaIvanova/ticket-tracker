import React, { useState } from "react";

const Counter = () => {
  const [count, updateCount] = useState(0);
  const IncrementCount = () => {
    const addToCount = count + 1;
    updateCount(addToCount);
  };
  const DepreciateCount = () => {
    const minusCount = count - 1;
    // if else
    updateCount(minusCount);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={IncrementCount}>Increment</button>
      <button onClick={DepreciateCount}>Decrease</button>
    </div>
  );
};

export default Counter;
