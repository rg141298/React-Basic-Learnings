import React from "react";

function AddNewExpenseButton(props) {
  return (
    <button onClick={() => props.toggleExpenseForm()}>Add New Expense</button>
  );
}

export default AddNewExpenseButton;
