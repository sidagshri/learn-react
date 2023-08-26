import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [expenseTitle, setExpenseTitle] = useState("");
  // const [expenseAmount, setExpenseAmount] = useState("");
  const [userInput, setUserInput] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenseDate: "",
  });
  const handleTitleChange = (event) => {
    console.log(event.target.value);
    setUserInput({
      ...userInput,
      expenseTitle: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={handleTitleChange}
            value={userInput.expenseTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
