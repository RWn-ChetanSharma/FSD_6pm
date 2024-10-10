import React from "react";

function UserList() {
  const users = ["Mitan", "Ishit", "Vansh", "Dhruvi"];

  const userData = users.map((user, index) => <li key={index}>{user}</li>);

  return (
    <>
      <div className="container">
        <h1>List Rendering</h1>

        <ul>{userData}</ul>
      </div>
    </>
  );
}

export default UserList;
