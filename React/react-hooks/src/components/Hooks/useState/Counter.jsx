import React, { useState } from "react";

function Counter() {
  // useState

  const [count, setCount] = useState(0);

  // Increment

  const Increment = () => {
    setCount(count + 1)
  };

  // Decrement

  // const Decrement = () => {
  //   setCount(count - 1)
  // };

  return (
    <>
      <div className="container text-bg-dark p-5 text-center">
        <h1>useState Hook</h1>
        <p>We are learning useState Hooks</p>
        <button className="btn btn-danger me-3" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button className="btn btn-primary my-4">Count : {count}</button>
        <button className="btn btn-success ms-3" onClick={Increment}>
          Increment
        </button>
      </div>
    </>
  );
}

export default Counter;
