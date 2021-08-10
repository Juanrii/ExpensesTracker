import React, { useState } from "react";
import ExpenseGenerator from "./components/Expenses/ExpenseGenerator";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e0",
    title: "Car Insurance",
    amount: 15000,
    date: new Date(2021, 4, 4)
  },
  {
    id: "e1", 
    title: "University",
    amount: 11000,
    date: new Date(2021, 8, 1)
  },
  {
    id: "e2",
    title: "Medical appointment",
    amount: 5000,
    date: new Date(2020, 10, 22)
  }
];

const App = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <ExpenseGenerator expenses={expenses}/>
      </header>
    </div>
  );
}

export default App;
