import "./ExpenseDate.css"
const ExpenseDate = (props) => {
    const year = props.date.toLocaleDateString('en-US', {year: 'numeric'});
    const month = props.date.toLocaleDateString('en-US', {month: 'long'}) ;
    const day = props.date.toLocaleDateString('en-US', {day: '2-digit'});
    return (
        <div>
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__day">{day}</div>
                <div className="expense-date__year">{year}</div>
            </div>
        </div>
    )
}

export default ExpenseDate;