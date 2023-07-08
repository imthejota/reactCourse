import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

export default function ExpenseItem(props) {
    let title = props.name;
    const clickHandler = () => {
        title = "clicked"
        console.log(title)
    };
    

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}> Perro </button>
        </Card>
    );
}
