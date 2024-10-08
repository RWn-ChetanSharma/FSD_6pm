import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Hooks/useState/Counter";
import Form from "./components/Hooks/useState/Form";


function App() {
  return (
    <>
      {/* useState  */}

      <Counter />
      <Form/>
    </>
  );
}

export default App;
