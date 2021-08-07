import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    /*const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState('');*/

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = (e) => {
        /*setUserInput({
            ...userInput, // Copy object's value
            enteredTitle: e.target.value
        });*/
        setUserInput((prevState) => { // prevState: latest state snapshot
            return {...prevState, enteredTitle: e.target.value};
        });
    };

    const amountChangeHandler = (e) => {
        setUserInput((prevState) => { 
            return {...prevState, enteredAmount: e.target.value};
        });
    };

    const dateChangeHandler = (e) => {
        setUserInput((prevState) => { 
            return {...prevState, enteredDate: e.target.value};
        });
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.1" 
                        step="0.1"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2020-01-01" 
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;
