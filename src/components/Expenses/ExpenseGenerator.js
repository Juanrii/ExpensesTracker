import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './ExpenseGenerator.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

const ExpenseGenerator = ({ expenses }) => {
    const [selectedDate, setSelectedDate] = useState('2021');

    const selectedDateHandler = selectedDate => {
        setSelectedDate(selectedDate); 
        console.log(`From ExpenseGenerator: Date Selected = ${selectedDate}`);
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
                <ExpensesList 
                    filteredExpenses={filteredExpenses}
                />
            </Card>
        </>
    )
}

export default ExpenseGenerator;
