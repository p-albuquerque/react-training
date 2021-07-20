import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <ExpenseItem
      title={props.expense.title}
      date={props.expense.date}
      amount={props.expense.amount}
    />
  );
}

export default Expenses;
