import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../action/expenses';
const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          props.history.push('/');
          //u can switch over any page using this it is not going to refrsh page
        }}
    />
  </div>
);

export default connect()(AddExpensePage);
