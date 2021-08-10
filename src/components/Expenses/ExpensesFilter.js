import React from 'react';
import './ExpensesFilter.css';
import { useTranslation } from 'react-i18next';

const ExpensesFilter = (props) => {
  const [t, i18n] = useTranslation("global");
  
  const dateChangeHandler = e => {
    props.onSelectedDate(e.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>{t("ExpensesFilter.filterBy")}</label>
        <select value={props.defaultSelected} onChange={dateChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;