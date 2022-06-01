import './NewExpense.css'

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenceData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenceData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;