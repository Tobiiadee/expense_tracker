import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title); 
  // console.log('expense Item re-evaluated');

  // const clickHandler = () => {
  //   setTitle("updated");
    
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2 className="title">{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
    </Card>
  );
}

export default ExpenseItem;
