import React, { useState } from 'react';
import Expensedate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = props => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Hola perro');
    };

    return (
        <Card className="expense-item">
            <Expensedate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Change title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;
