import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  // Input Change Handler

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // Handling Form Submission
  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty)",
      });

      return;
    }

    if (+enteredAge.trim() < 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });

      return;
    }

    props.onAddUser(enteredName, enteredAge);

    setEnteredName("");
    setEnteredAge("");
  };

  // Error Handler

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            onChange={nameChangeHandler}
            value={enteredName}
            type="text"
            id="username"
          />
          <label htmlFor="userage">Age (Years)</label>
          <input
            onChange={ageChangeHandler}
            value={enteredAge}
            type="number"
            id="userage"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
