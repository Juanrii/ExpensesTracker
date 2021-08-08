import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    /*const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState('');*/

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = e => {
        /*setUserInput({
            ...userInput, // Copy object's value
            enteredTitle: e.target.value
        });*/
        setUserInput((prevState) => { // prevState: latest state snapshot
            return {...prevState, enteredTitle: e.target.value};
        });
    };

    const amountChangeHandler = e => {
        setUserInput((prevState) => { 
            return {...prevState, enteredAmount: e.target.value};
        });
    };

    const dateChangeHandler = e => {
        setUserInput((prevState) => { 
            return {...prevState, enteredDate: e.target.value};
        });
    };

    const submitHandler = e => {
        e.preventDefault();

        const expenseDate = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        };


        /* Pass data from Child to Parent */
        props.onSaveExpenseData(expenseDate);

        /* Reset values after submit - Two-ways Binding, 
            pass a new value back into the input */
        setUserInput({
            enteredTitle: '', 
            enteredAmount: '', 
            enteredDate: ''
        });
    };

    const notify = () => toast.success("New expense added :)");

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        onChange={titleChangeHandler}
                        value={userInput.enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.1" 
                        step="0.1"
                        onChange={amountChangeHandler}
                        value={userInput.enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2020-01-01" 
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                        value={userInput.enteredDate}
                    />
                </div>
                <div className="new-expense__actions">
                    <button onClick={notify} type="submit">Add Expense</button>
                </div>
                <Toaster position="bottom-right"/>
            </div>
        </form>
    );
}

export default ExpenseForm;
