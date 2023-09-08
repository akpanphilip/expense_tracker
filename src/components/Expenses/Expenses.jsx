/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from '../UI/Card';
// import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    // const [filterInfoText, setFilterInfoText] = useState('2019, 2021 & 2022')

    // example on derieved computed state
    // let filterInfoText = '2019, 2021 & 2022';

    // if (filteredYear === '2019') {
    //     filterInfoText = '2020, 2021 & 2022';
    // }
    // else if (filteredYear === '2021') {
    //     filterInfoText = '2019, 2020 & 2022';
    // }
    // else {
    //     filterInfoText = '2019, 2020 & 2021';
    // }

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />

            {/* <p>Data for years {filterInfoText} is hidden.</p> */}

            {/* transformed the array to an array full of jsx items */}

            {/* to display all items */}
            {/* {props.items.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))} */}

            {/* to display filtered items */}
            {/* {filteredExpenses.length === 0 ? (<p className="expense__info">No expenses found.</p>) : filteredExpenses.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))} */}
            <ExpensesList items={filteredExpenses} />
            {/* 
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> 
            */}

        </Card>
    );
}
export default Expenses;