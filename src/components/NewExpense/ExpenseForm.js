import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [t, i18n] = useTranslation("global");
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = e => {
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

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        };

        /* Pass data from Child to Parent */
        props.onSaveExpenseData(expenseData);

        /* Reset values after submit - Two-ways Binding, 
            pass a new value back into the input */
        setUserInput({
            enteredTitle: '', 
            enteredAmount: '', 
            enteredDate: ''
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>{t("ExpenseForm.title")}</label>
                    <input 
                        type="text" 
                        onChange={titleChangeHandler}
                        value={userInput.enteredTitle}
                        required={true}
                    />
                </div>
                <div className="new-expense__control">
                    <label>{t("ExpenseForm.amount")}</label>
                    <input 
                        type="number" 
                        onChange={amountChangeHandler}
                        value={userInput.enteredAmount}
                        required={true}
                    />
                </div>
                <div className="new-expense__control">
                    <label>{t("ExpenseForm.date")}</label>
                    <input 
                        type="date" 
                        min="2015-01-01" 
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                        value={userInput.enteredDate}
                        required={true}
                    />
                </div>
                <div className="new-expense__actions">
                    <button onClick={props.onCancel} type="button">{t("ExpenseForm.button.cancel")}</button>
                    <button type="submit">{t("ExpenseForm.button.add")}</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;
