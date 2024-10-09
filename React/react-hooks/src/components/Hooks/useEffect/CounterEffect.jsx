import React, { useEffect, useState } from "react";

function CounterEffect() {
  // useState

  const [count, setCount] = useState(0);

  //   useEffect

  useEffect(() => {
    // setup code
    console.log("Component Mounted", count);

    return () => {
      // optional
      // cleanup function

      console.log("Component unmounted", count);
    };
  }, [count]);  // dependency array 

  return (
    <>
      <div className="container text-bg-dark p-5 text-center">
        <h1>useEffect Hook</h1>
        <p>We are learning useState Hooks</p>
        <button
          className="btn btn-danger me-3"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button className="btn btn-primary my-4">Count : {count}</button>
        <button
          className="btn btn-success ms-3"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default CounterEffect;
