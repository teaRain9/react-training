import "./Expenses.css"
import Card from "../Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }



    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })



    return (
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear}
                                onChangeFilter={filterChangeHandler}
                />

                <ExpensesChart expenses={filteredExpenses} />

                <ExpenseList items={filteredExpenses} />

            </Card>
    );
}

export default Expenses;