import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './ExpenseGenerator.css';
import Card from '../UI/Card';

const ExpenseGenerator = ({ expenses }) => {
    const [selectedDate, setSelectedDate] = useState('2021');

    const selectedDateHandler = selectedDate => {
        setSelectedDate(selectedDate); 
        console.log(`From ExpenseGenerator: Date Selected = ${selectedDate}`);
    };

    return (
        <>
            <Card className="expenses">
                <ExpensesFilter 
                    onSelectedDate={selectedDateHandler}
                    defaultSelected={selectedDate}    
                />
                {expenses.map(exp => (
                    <ExpenseItem
                        amount  = {exp.amount}
                        date    = {exp.date}
                        id      = {exp.id}
                        key     = {exp.id} 
                        title   = {exp.title}
                    />
                ))}
            </Card>
        </>
    )
}

export default ExpenseGenerator;
