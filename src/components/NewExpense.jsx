import React from 'react';
import ExpenceForm from './ExpenceForm';
import './NewExpense.css';

let NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseDate={
            ...enteredExpenseData,
            id : Math.random().toString()
        }

        props.onAddExpense(expenseDate);

    };
    return(
        <div className="new-expense">
            <ExpenceForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}
export default   NewExpense;