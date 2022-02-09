import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";
import ErrorModal from "./components/UI/ErrorModal/ErrorModal";

function App() {
  const [error, setError] = useState();
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          id: Math.random().toString(),
          name: username,
          age: age,
        },
      ];
    });
  };

  const errorHandler = (error) => {
    setError(error);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} toggleError={errorHandler} />
      <UsersList users={usersList} />
      {error && (
        <ErrorModal
          title={error.title || ""}
          message={error.message || ""}
          onConfirm={() => errorHandler(null)}
        />
      )}
    </div>
  );
}

export default App;
