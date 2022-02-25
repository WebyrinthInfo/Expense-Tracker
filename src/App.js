import React,{useState} from 'react';
import "./App.css";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense';
let Dummy_expense =[
    {
      id : 'e1',
      title : 'school Fee',
      amount :250,
      date : new Date(2020, 12,15)
    },
    {
      id : 'e2',
      title : 'school Diry',
      amount :451,
      date : new Date(2022, 9,19)
    },
    {
      id : 'e3',
      title : 'school Bus',
      amount :550,
      date : new Date(2025, 2,5)
    }
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_expense);
 

  const addExpenseHandler = (expense) =>{
      const updatedExpense = [expense, ...expenses];
      setExpenses(updatedExpense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item = {expenses}/>
    </div>
  );
}

export default App;
