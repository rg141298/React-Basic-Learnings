import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const initialInputs = {
    username: "",
    age: "",
  };

  const [inputs, setInputs] = useState(initialInputs);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!inputs.username.trim().length || !inputs.age.trim().length) {
      props.toggleError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+inputs.age < 1) {
      props.toggleError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    props.onAddUser(inputs.username, inputs.age);
    resetForm();
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;

    const updatedInputs = { ...inputs };
    updatedInputs[name] = value;

    setInputs(updatedInputs);
  };

  const resetForm = () => {
    setInputs(initialInputs);
  };

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={inputs.username}
            onChange={inputChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            name="age"
            type="number"
            value={inputs.age}
            onChange={inputChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
