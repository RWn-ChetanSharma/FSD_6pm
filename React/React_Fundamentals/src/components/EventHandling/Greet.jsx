import React, { useState } from "react";

function Greet() {
    const [color, setColor] = useState("red");

  function handleEvent() {
    alert("Namaste Bharat");
  }

  const handleMouseEvent = () => {
    setColor("lime");
  };

  return (
    <>
      <div className="container">
        <h1>Greet</h1>
        <button className="btn btn-primary my-3" onClick={handleEvent}>
          Click Me
        </button>
        <div
          className="box"
          onMouseOver={handleMouseEvent}
          style={{ backgroundColor: color, border: "2px solid black" }}
        ></div>
      </div>
    </>
  );
}

export default Greet;
