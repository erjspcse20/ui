import React from 'react';
//use https://momentjs.com/ to provide date picker and its helper airbnb react-dates http://airbnb.io/react-dates/ 
//or  https://github.com/airbnb/react-dates to convert all into unix timestamp
//npm install moment --save  npm install react-dates@12.3.0   npm install react-addons-shallow-compare@15.6.0
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';
//https://github.com/airbnb/react-dates

// const date = new date(); // we can use date for date but we dont have need to do that use moment it is very handy
//const now = moment();
//console.log(now.format('MMM Do, YYYY'));//use documentation to display pattern from https://momentjs.com/docs/#/displaying/
export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.expense ? props.expense.id : '',
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount : '',
            createdAt:props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error:''
        }
    }
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        error:''
      };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({ description }));
    };
    onExpenseChange = (e) => {
        const note = e.target.value;
        //e.persist();
        //this.setState(()=>({ expensenote: e.target.value }));
        this.setState(()=>({ note }));
    };
    //use regex101.com for making regular expresion
    onAmountChange = (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt)
        {
            this.setState(() => ({ createdAt }));
        }
      };
      onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
      };
      onSubmit = (e) => {
          e.preventDefault();
          if(!this.state.description || !this.state.amount)
          {
              //set error state
              this.setState(() => ({ error: 'Please provide description and amount.'}));
          }
          else{
              //clear the all error
              this.setState(() =>({ error: ''}));
              this.props.onSubmit({
                  description: this.state.description,
                  amount: parseFloat(this.state.amount, 10) * 100,
                  createdAt: this.state.createdAt.valueOf(),
                  note: this.state.note
              })
          }
      }

    render(){
        return(
            <div>
                { this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                        
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        placeholder="Add a note for your expence (Optional)"
                        onChange={this.onExpenseChange}
                        value={this.state.note}
                    >
                    
                    </textarea>
                    <button>{this.state.id ? 'Update Expence' : 'Add Expence'}</button>
                </form>
            </div>
        )
    }
}