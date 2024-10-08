import React, { useState } from "react";

function Form() {
  const [firstInput, setFirstInput] = useState("");
  const [lastInput, setLastInput] = useState("");

  return (
    <>
      <div className="container text-bg-dark p-5 my-4">
        <h1 className="text-center text-decoration-underline text-danger">
          My Form
        </h1>
        <div className="col">
          <label htmlFor="">First Name :</label>
          <input
            type="text"
            className="form-control my-3"
            value={firstInput}
            onChange={(e) => setFirstInput(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="">Last Name:</label>
          <input
            type="text"
            className="form-control my-3"
            value={lastInput}
            onChange={(e) => setLastInput(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary">Submit</button>
        </div>

        {/* Preview  */}

        <div className="col text-bg-success my-3 py-2 text-center">
          <h1>
            Namaste {firstInput} {lastInput}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Form;
