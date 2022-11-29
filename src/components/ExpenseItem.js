import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-title">
        <div>November 2022</div>
        <h2 className="title">Car Insurance</h2>
      </div>
      <div className="expense-price">$2389.6</div>
    </div>
  );
}

export default ExpenseItem;
