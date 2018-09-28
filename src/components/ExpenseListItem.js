import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import numeral from 'numeral';
const ExpenseListItem = ({ id, description, amount, createdAt }) =>(
    <div>
        <h3>{description}</h3>
        <p>Bill Amount : {numeral(amount/100).format('$0,0.00')}</p>
        <p>Created At :  {moment(createdAt).format('MMMM Do, YYYY')}</p>
        <button>
        <NavLink to={`/edit/${id}`}>Edit</NavLink>
        </button>
        
    </div>
);
export default ExpenseListItem;