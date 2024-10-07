import React from "react";

function Button() {
  const handleEvent = () => {
    alert("Namaste Bharat");
    // window.location.href = "https://www.google.com"
  };

  return (
    <>
      {/* <button onClick={() => alert("Kal padhege")}>Read More</button> */}
      <button onClick={handleEvent}>Read More</button>
    </>
  );
}

export default Button;
