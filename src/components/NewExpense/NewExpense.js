import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
        toast.success(props.translation("NewExpense.notify"));
    };

    const showFormHandler = () => {
        setShowForm(true);
    };
    const hideFormHandler = () => {
        setShowForm(false);
    };

    return (
        <div className="new-expense">
            {!showForm &&
                <button onClick={showFormHandler}>{props.translation("NewExpense.button.add")}</button>
            }
            {showForm &&
                <ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={hideFormHandler}
                    translation={props.translation}    
                />
            }
            <Toaster position="bottom-right"/>
        </div>
    );
};

export default NewExpense;
