import React, { useState } from "react";
import ExpenseGenerator from "./components/Expenses/ExpenseGenerator";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e0",
    title: "Car Insurance 0",
    amount: 212.33,
    date: new Date(2021, 9, 4)
  },
  {
    id: "e1", 
    title: "Car Insurance 1",
    amount: 321.22,
    date: new Date(2021, 4, 2)
  },
  {
    id: "e2",
    title: "Car Insurance 2",
    amount: 333.12,
    date: new Date(2022, 10, 22)
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
