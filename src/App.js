import React from "react";
import ExpenseGenerator from "./components/Expenses/ExpenseGenerator";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  
  const expenses = [
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
      date: new Date(2021, 10, 22)
    }
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense />
        <ExpenseGenerator expenses={expenses}/>
      </header>
    </div>
  );
}

export default App;
