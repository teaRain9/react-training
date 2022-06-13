import './NewExpense.css'

import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    let [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    if (!isEditing) {
        return (
            <div className="new-expense">
                <button onClick={startEditingHandler}>Add New Expense</button>
            </div>
        )}

    return (
        <div className="new-expense">
            <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseDate={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;