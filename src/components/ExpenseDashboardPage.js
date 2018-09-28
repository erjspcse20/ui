import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './EpenceListFilter';
import ExpensesSummary from './ExpensesSummery';
const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
