import React from "react";
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="count">
      <h1>count : {count}</h1>
      <div>
        <button
          className="count-btn"
          style={{ margin: "5px", padding: "5px", backgroundColor: "gray" }}
          onClick={() => setCount(count + 1)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Count;
