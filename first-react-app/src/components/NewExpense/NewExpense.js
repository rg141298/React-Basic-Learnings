import React, { useState } from "react";

import AddNewExpenseButton from "./AddNewExpenseButton";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  function toggleExpenseForm() {
    setShowExpenseForm((prevValue) => {
      return !prevValue;
    });
  }

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setShowExpenseForm();
    // console.log(expenseData);
  }

  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          toggleExpenseForm={toggleExpenseForm}
        />
      ) : (
        <AddNewExpenseButton toggleExpenseForm={toggleExpenseForm} />
      )}
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
    </div>
  );
}

export default NewExpense;
