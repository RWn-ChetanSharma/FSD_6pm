import React from "react";
import Drive from "./Drive";

function Conditional() {
  let userAge = 15;

  //   Method 1

  //   if (userAge >= 18) {
  //     return <Drive age={userAge} allow="can" />;
  //   } else {
  //     return <Drive age={userAge} allow="can't" />;
  //   }

  return (
    <>
      {/* Method 2 => ternary Operator  */}

      <Drive age={userAge} allow={userAge >= 18 ? "can" : "can't"} />

      {/* Method 2 => ternary Operator with jsx  */}

      <Drive age={userAge} allow={userAge >= 18 ? (<b>can</b>) : (<b><i>can't</i></b>)} />
    </>
  );
}

export default Conditional;
