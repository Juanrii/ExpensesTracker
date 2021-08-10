import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useTranslation } from 'react-i18next';

/* TODO: Add react hot toast for notifications */

const NewExpense = props => {
    const [t, i18n] = useTranslation("global");
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
        toast.success(t("NewExpense.notify"));
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
                <button onClick={showFormHandler}>{t("NewExpense.button.add")}</button>
            }
            {showForm &&
                <ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={hideFormHandler}/>
            }
            <Toaster position="bottom-right"/>
        </div>
    );
};

export default NewExpense;
