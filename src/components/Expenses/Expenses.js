import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [currentYear, setCurrentYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setCurrentYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === currentYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedValue={currentYear}
        onChangeHandler={filterChangeHandler}
      />
      {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredExpenses.map((expense, i) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))
      )}
    </Card>
  );
};

export default Expenses;
