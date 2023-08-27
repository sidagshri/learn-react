import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const handleTitleChange = (event) => {
    setExpenseTitle(event.target.value);
  };
  const handleAmountChange = (event) => {
    setExpenseAmount(event.target.value);
  };
  const handleDateChange = (event) => {
    setExpenseDate(event.target.value);
  };

  const handleOnSubmit = (event) => {
    console.log(event.target);
    event.preventDefault();
    props.onSaveExpenseData({
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate),
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="expenseTitle"
            type="text"
            onChange={handleTitleChange}
            value={expenseTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="expenseAmount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
            value={expenseAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="expenseDate"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleDateChange}
            value={expenseDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
