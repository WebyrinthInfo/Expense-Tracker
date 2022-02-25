import React from 'react';
import './ExpenseItem.css';
import ExpenseTime from './ExpenseTime';
// import Card from './Card';

const ExpenseItem = (props) =>{
    
    
    return(
        <div className='expense-item' >
            <ExpenseTime date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>

    );
}
export default ExpenseItem;