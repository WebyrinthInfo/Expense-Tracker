import React from 'react';
import './ExpenseTime.css';

let ExpenseTime = (props) =>{
    // const month = props.date.toLocalString('en-US',{month:'long'});
    // const year = props.date.getFullYear() ;
    // const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    return(
        <div className='expense-time'>
                <div className='expense-time__month'>{'DEC'}</div>
                <div className='expense-time__year'>{2020}</div>
                <div className='expense-time__day'> {24}</div>
            </div>
    );
}
export default ExpenseTime;