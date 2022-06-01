import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filterdExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear() == filteredYear
    })

    return (
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear}
                                onChangeFilter={filterChangeHandler}
                />

                {filterdExpenses.length === 0 && <p>No Expense Found!</p>}
                {filterdExpenses.length > 0 &&
                    filterdExpenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
    );
}

export default Expenses;