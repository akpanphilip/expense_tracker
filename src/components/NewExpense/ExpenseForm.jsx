/* eslint-disable react/prop-types */
import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // alt
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '', enteredAmount: '', enteredDate: ''
    // })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // alt
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle: event.target.value};
        // })

    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    // creating a shared handler function
    // const inputChangeHander = (identifier, value) => {
    //     if (identifier === 'title') {
    //         setEnteredTitle(value)
    //     } else if (identifier === 'date') {
    //         setEnteredDate(value);
    //     } else {
    //         setEnteredAmount(value);
    //     }
    // }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate,
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    {/* <input type="text" onChange={(event) => inputChangeHander('title', event.target.value)} /> */}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                    {/* <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHander('amount', event.target.value)}  /> */}

                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} />
                    {/* <input type="date" min="2019-01-01" max="2024-12-31" onChange={(event) => inputChangeHander('date', event.target.value)} /> */}
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm