import React, { useState } from 'react'
import ExpensesFilter from './ExpensesFilter';
import './ExpenseGenerator.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const ExpenseGenerator = ({ expenses }) => {
    const [selectedDate, setSelectedDate] = useState('2021');

    const selectedDateHandler = selectedDate => {
        setSelectedDate(selectedDate); 
    };

    const filteredExpenses = expenses.filter(exp => {
        return exp.date.getFullYear().toString() === selectedDate;
    });

    return (
        <>
            <Card className="expenses">
                <ExpensesFilter 
                    onSelectedDate={selectedDateHandler}
                    defaultSelected={selectedDate}    
                />
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpensesList 
                    filteredExpenses={filteredExpenses}
                />
            </Card>
        </>
    )
}

export default ExpenseGenerator;
