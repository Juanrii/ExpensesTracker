import React, { useState } from "react";
import ExpenseGenerator from "./components/Expenses/ExpenseGenerator";
import NewExpense from "./components/NewExpense/NewExpense";
import { useTranslation } from 'react-i18next';

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
  const [t, i18n] = useTranslation("global");
  const [buttonLabel, setButtonLabel] = useState(false);

  const addExpenseHandler = expense => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const onChangeLabelHandle = _ => {
    setButtonLabel(!buttonLabel);
    let language = '';
    buttonLabel ? language = "en" : language = "es";
    return i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onChangeLabelHandle}>{buttonLabel ? "EN" : "ES"}</button>
        <NewExpense 
          onAddExpense={addExpenseHandler} 
          translation={t}
        />
        <ExpenseGenerator 
          expenses={expenses} 
          translation={t}
        />
      </header>
    </div>
  );
}

export default App;
