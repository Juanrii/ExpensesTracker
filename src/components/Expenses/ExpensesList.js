import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
import { useTranslation } from 'react-i18next';

const ExpensesList = ({ filteredExpenses }) => {
    const [t, i18n] = useTranslation("global");

    if (filteredExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>{t("ExpensesList.notFound")}</h2>
    }

    return (
        <ul className="expenses-list">
            {filteredExpenses.map(exp => (
                <ExpenseItem
                    amount  = {exp.amount}
                    date    = {exp.date}
                    id      = {exp.id}
                    key     = {exp.id} 
                    title   = {exp.title}
                />
            ))};
        </ul>
    );
}

export default ExpensesList;
