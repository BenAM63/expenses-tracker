import React, { useState } from "react";

import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from '../UI/Card';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [newYear, setNewYear] = useState("2020");

  function saveYearHandler(chosenYear) {
    setNewYear(chosenYear);
  }

  const filteredExpenses = props.expensesList.filter(item => {
    return item.date.getFullYear().toString() === newYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={newYear} onSaveYear={saveYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;