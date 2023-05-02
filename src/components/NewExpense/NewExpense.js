import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

function NewExpense(props) {
    const [isClicked, setIsClicked] = useState(false);

    function showFormHandler() {
        setIsClicked(!isClicked);
    };

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsClicked(!isClicked);
    }

    function cancelExpenseHandler() {
        setIsClicked(!isClicked);
    }

    return (
        <div className="new-expense">
            {!isClicked && <button onClick={showFormHandler}>Add New Expense</button>}
            {isClicked && <ExpenseForm onCancelExpense={cancelExpenseHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
}

export default NewExpense;