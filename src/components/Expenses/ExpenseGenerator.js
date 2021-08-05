import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseGenerator.css';
import Card from '../UI/Card';

const ExpenseGenerator = ({ expenses }) => {

    return (
        <Card className="expenses">
            <ExpenseItem 
                id={expenses[0].id}
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem 
                id={expenses[1].id}
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem 
                id={expenses[2].id}
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
        </Card>
    )
}

export default ExpenseGenerator;
